/* eslint-disable no-console */
$(document).ready(function() {

  /** Force entry of user data even if known */
  $('a.js-not-you').click();

  /** Loading spinner */
  var spinnerHTML = '<div id="surveySpinner" style="display:none; width: 100%; height: 80px; text-align: center; margin-bottom: 100px;"><img ' +
    'src="https://rawgit.com/lowlandjuju/levelup-dfe-consultation/master/Wedges-3s-97px.svg" /><p>Loading next page...</p></div>';
  $('#survey-form').prepend(spinnerHTML);
  var spinner = $('#surveySpinner');

  /** Prep */
  var submitButton = $('a.js-submit-survey');
  var questionBlocks = $('.js-question-blocks');
  var nextBlock = $('a.js-next-block');
  submitButton.addClass('disabled');
  questionBlocks.hide();
  spinner.show();
  submitButton.removeAttr('onclick');

  setTimeout(function() {

    /** Globals */
    var uriBase = 'https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation';
    var submitting = false;
    var activeBatch = 1;
    var finalBatch = 3;
    var batchesSubmitted = [];

    /** Generate hidden forms */
    Object.values(dfePages).forEach(function(page){
      var final = page.name === 'submissionPage' ? true : null;
      $(formGenerator(page, uriBase, final)).appendTo('#heading-container');
    });

    /** Generate modals */
    Object.values(dfePages).forEach(function(page) {
      if (page.modal) {
        page.questions.forEach(function(q) {
          var qId = q.speakoutName.replace(/[^a-z0-9\s]/gi, '');
          $(generateModal(q.modalContent, `${qId}-modal`)).appendTo('#content');
          $(`input[name='${q.speakoutName}']`).closest('.question').find('.help-block').attr({
            'data-toggle': 'modal',
            'data-target': `#${qId}-modal`
          }).css({'cursor': 'pointer'});
        });
      }
    });

    /** Format DfE modal data */
    $('table.MsoTableGrid td.subhead').each(function(){
      var htmlString = $( this ).html();
      $(this).closest('tr').before($(htmlString).wrap('<tr></tr>'));
      $(this).remove();
    });

    /** Find select inputs and clear first items */
    $('div.question select').each(function(){
      $(this).prepend($('<option value=""></option>'));
      $(this).val('');
    });


    /** Form data contingent display */
    var confidential = $('#survey-question-id-87');
    var other = $('#survey-question-id-90');
    confidential.hide();
    other.hide();
    $('input[name="q[86]"]').change(function(){
      if ($(this).val() === 'Yes') confidential.show();
      else confidential.hide();
    });
    $('select[name="q[89]"]').change(function(){
      if ($(this).val().includes('Other (Please explain)')) other.show();
      else other.hide();
    });

    /** Load DfE consulation into iframe with initial page */
    $('<iframe ' +
      'id="dfe" ' +
      'name="dfe" ' +
      'style="display: none; height: 0; width: 0; margin: 0;" ' +
      `src="${uriBase}/${dfePages.consent.dfeTarget}/">` +
      '</iframe>').on('load', function(){
      /** Trigger UI changes, form actions and iframe updates */
      // console.log('DfE page loading after src change');
      questionBlocks.show();
      $(spinner).hide();
      nextBlock.show();
    }).appendTo('#heading-container');

    /**
     * This is where the data from each page of our standard Speakout survey gets entered into
     * the fields of our hidden forms, each of which has target="dfe" set where dfe is the name/ID of
     * the iframe in which the DfE consultation form is loaded
     */
    nextBlock.add(submitButton).click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      // console.log(e.target);
      // console.log('next/submit clicked');
      /** Add pages in batch to queue */
      var pages = Object.values(dfePages).filter(function(page){return page.batch === activeBatch;});

      /** Check if we should do anything on this click of next */
      var doSubmit = pages.length > 0
        && !batchesSubmitted.includes(activeBatch)
        && validate_form($(e.target).closest('form#survey-form')); // eslint-disable-line no-undef

      // console.log('will submit: ' + doSubmit);
      // console.log('active batch ' + activeBatch);

      if (doSubmit) {
        var iframe = $('#dfe');

        /** Hide controls */
        questionBlocks.hide();
        nextBlock.hide();
        $(spinner).show();

        pages.forEach(function(page, idx){
          var waitOnIframe = setInterval(function(){
            if (submitting === false) {
              submitting = true;
              clearInterval(waitOnIframe);
              // console.log('cleared interval...');

              /** Load data into hidden form */
              loadDataIntoForm(page.questions);
              // console.log('loaded data into forms...');

              /** Setup submission */
              iframe.off();
              if (activeBatch === finalBatch) $('#surveySpinner p').html('Submitting your answers to the Department for Education...');
              iframe.on('load', function() { // Set iframe callback for GET iframe
                iframe.off();
                iframe.on('load', function() { // Set iframe callback for POST to iframe
                  submitting = false;
                  iframe.off();
                  if (idx === (pages.length - 1)) {

                    if (activeBatch < finalBatch) {
                      /** Return control to user */
                      questionBlocks.show();
                      nextBlock.show();
                      $(spinner).hide();
                      batchesSubmitted.push(activeBatch);
                      activeBatch += 1;
                      if (activeBatch === finalBatch) {
                        submitButton.removeClass('disabled');
                        nextBlock.hide();
                      }
                    } else {
                      return window.test_submit();
                    }
                  }
                });

                setTimeout(function(){
                  /** Trigger DfE iframe submission */
                  $(`#${page.name}-form`).submit();
                }, 200);

              });

              /** Trigger submissions by loading correct survey page in iframe */
              $('#dfe').attr('src', `${uriBase}/${page.dfeTarget}`);

            } else {
              // console.log('still submitting...');
            }
          }, 300 + idx);
        });
      }
    });


  }, 2000);
});


function formGenerator(page, uriBase, final) {
  return $(`<form ${!final && 'enctype="multipart/form-data"'} id="${page.name}-form"
      action="${uriBase}/${page.dfeTarget}" target="dfe" method="post" style="display: none; height: 0; width: 0;">` +
    page.formHTML + '</form>');
}


function escapeSelector(str) {
  // noinspection RegExpRedundantEscape
  return str.replace(
    // eslint-disable-next-line no-useless-escape
    /([$%&()*+,./:;<=>?@\[\\\]^\{|}~])/g,
    '\\$1'
  );
}

function loadDataIntoForm(questions) {
  questions.forEach(function(question) {
    if (question.targetId) var target = $('#' + escapeSelector(question.targetId));
    switch (question.type) {
    case 'checkbox':
    case 'radio':
      var checked = $(`input[name='${question.speakoutName}']:checked`);
      if (checked.length !== 0) {
        var selected = checked.val();
        $('#' + escapeSelector(question.targetIds[selected])).prop('checked', true).attr('checked', 'checked');
      }
      break;
    case 'select':
    case 'text':
      var text = $(`${question.type === 'select' ? 'select' : 'input'}[name='${question.speakoutName}']`).val();
      target.val(text);
      break;
    case 'textarea':
      var textarea = $(`textarea[name='${question.speakoutName}']`).val();
      target.val(textarea);
      break;
    default:
      break;
    }
  });
}

function generateModal(data, id) {
  return `<div class="modal fade" tabindex="-1" role="dialog" id=${id} aria-hidden="true" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Draft statutory guidance</h4>
      </div>
      <div class="modal-body">
        ${data}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
}
