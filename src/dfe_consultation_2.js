/* eslint-disable no-console */
$(document).ready(function() {

  var dfeFormConsent = `<input type="hidden" name="__userinfo_cs_version" value="v3.11.2-v3-frontend">
<input type="hidden" name="question.2018-06-11.0696472112-radiosubquestion" value="__deselected_radio_group">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-06-11.0696472112-radiosubquestion-0" value="Yes" name="question.2018-06-11.0696472112-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-06-11.0696472112-radiosubquestion-1" value="No" name="question.2018-06-11.0696472112-radiosubquestion">
<textarea name="question.2018-06-11.1859110439-textareasubquestion" id="question.2018-06-11.1859110439-textareasubquestion" class="form-control" data-test-hook="subquestion-textarea" rows="5"></textarea>
<input type="hidden" name="question.2018-06-11.0820412936-booleansubquestion" value="no">
<input type="checkbox" data-test-hook="subquestion-boolean" value="yes" name="question.2018-06-11.0820412936-booleansubquestion" id="question.2018-06-11.0820412936-booleansubquestion">
<input type="hidden" name="form.submitted" value="1">
<input type="hidden" name="came_from" value="https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation/subpage.2018-06-11.0090277436/">
<input type="hidden" name="form.button.next">`;

  var dfeFormIntro = `<input type="hidden" name="__userinfo_cs_version" value="v3.11.3-v3-frontend">
<input type="text" class="form-control" data-test-hook="subquestion-text" value="" name="opsuite.respondentmanagement.name_subquestion" id="opsuite.respondentmanagement.name_subquestion">
<input type="email" class="form-control" data-test-hook="subquestion-email" value="" name="quickconsult.email_subquestion" id="quickconsult.email_subquestion">
<select data-test-hook="subquestion-select" name="question.2018-04-17.3554038099-selectsubquestion" id="question.2018-04-17.3554038099-selectsubquestion">
<option value="">-- Please Select --</option>
</select>
<input type="text" class="form-control" data-test-hook="subquestion-text" value="" name="question.2018-04-17.3554038099-textsubquestion" id="question.2018-04-17.3554038099-textsubquestion">
<select data-test-hook="subquestion-select" name="question.2018-04-17.6432127774-selectsubquestion-1" id="question.2018-04-17.6432127774-selectsubquestion-1">
<option value="">-- Please Select --</option>
</select>
<select data-test-hook="subquestion-select" name="question.2018-06-11.9682373257-selectsubquestion" id="question.2018-06-11.9682373257-selectsubquestion">
<option value="">-- Please Select --</option>
<option value="Headteacher">Headteacher</option>
<option value="Teacher">Teacher</option>
<option value="School Governor">School Governor</option>
<option value="Other educational professional">Other educational professional</option>
<option value="Teaching union (only select if answering on behalf of the teaching union)">Teaching union (only select if answering on behalf of the teaching union)</option>
<option value="Young person (18 or younger)">Young person (18 or younger)</option>
<option value="Parent">Parent</option>
<option value="Grandparent">Grandparent</option>
<option value="Organisation (only select if answering on behalf of the organisation)">Organisation (only select if answering on behalf of the organisation)</option>
<option value="Interested individual">Interested individual</option>
<option value="Other (Please explain)">Other (Please explain)</option>
</select>
<input type="text" class="form-control" data-test-hook="subquestion-text" value="" name="question.2018-06-11.9682373257-textsubquestion" id="question.2018-06-11.9682373257-textsubquestion">
<input type="hidden" name="form.submitted" value="1">
<input type="hidden" name="came_from" value="https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation/intro/">
<input type="hidden" name="form.button.next">`;

  var dfeFormQuestionsPage0 = '';

  var dfeFormQuestionsPage1 = `<input type="hidden" name="__userinfo_cs_version" value="v3.11.3-v3-frontend">
<input type="hidden" name="question.2018-04-16.2195189970-radiosubquestion" value="__deselected_radio_group">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.2195189970-radiosubquestion-0" value="strongly agree" name="question.2018-04-16.2195189970-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.2195189970-radiosubquestion-1" value="agree" name="question.2018-04-16.2195189970-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.2195189970-radiosubquestion-2" value="neither agree or disagree" name="question.2018-04-16.2195189970-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.2195189970-radiosubquestion-3" value="disagree" name="question.2018-04-16.2195189970-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.2195189970-radiosubquestion-4" value="strongly disagree" name="question.2018-04-16.2195189970-radiosubquestion">
<input type="hidden" name="question.2018-04-16.4593421441-radiosubquestion" value="__deselected_radio_group">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.4593421441-radiosubquestion-0" value="strongly agree" name="question.2018-04-16.4593421441-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.4593421441-radiosubquestion-1" value="agree" name="question.2018-04-16.4593421441-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.4593421441-radiosubquestion-2" value="neither agree or disagree" name="question.2018-04-16.4593421441-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.4593421441-radiosubquestion-3" value="disagree" name="question.2018-04-16.4593421441-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.4593421441-radiosubquestion-4" value="strongly disagree" name="question.2018-04-16.4593421441-radiosubquestion">
<textarea name="question.2018-04-16.4593421441-textareasubquestion" id="question.2018-04-16.4593421441-textareasubquestion" class="form-control" data-test-hook="subquestion-textarea" rows="5"></textarea>
<input type="hidden" name="question.2018-04-16.5897528280-radiosubquestion" value="__deselected_radio_group">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.5897528280-radiosubquestion-0" value="strongly agree" name="question.2018-04-16.5897528280-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.5897528280-radiosubquestion-1" value="agree" name="question.2018-04-16.5897528280-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.5897528280-radiosubquestion-2" value="neither agree or disagree" name="question.2018-04-16.5897528280-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.5897528280-radiosubquestion-3" value="disagree" name="question.2018-04-16.5897528280-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-16.5897528280-radiosubquestion-4" value="strongly disagree" name="question.2018-04-16.5897528280-radiosubquestion">
<textarea name="question.2018-04-16.5897528280-textareasubquestion" id="question.2018-04-16.5897528280-textareasubquestion" class="form-control" data-test-hook="subquestion-textarea" rows="5"></textarea>
<input type="hidden" name="form.submitted" value="1">
<input type="hidden" name="came_from" value="https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation/subpage.2018-04-16.0784244677/">
<input type="hidden" name="form.button.next">`;

  var dfeFormQuestionsPage2 = `<form enctype="multipart/form-data" method="post" action="https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation/subpage.2018-04-18.1679384722/">
<input type="hidden" name="__userinfo_cs_version" value="v3.11.3-v3-frontend">
<input type="hidden" name="question.2018-04-18.2497916716-radiosubquestion" value="__deselected_radio_group">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.2497916716-radiosubquestion-0" value="strongly agree" name="question.2018-04-18.2497916716-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.2497916716-radiosubquestion-1" value="agree" name="question.2018-04-18.2497916716-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.2497916716-radiosubquestion-2" value="neither agree or disagree" name="question.2018-04-18.2497916716-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.2497916716-radiosubquestion-3" value="disagree" name="question.2018-04-18.2497916716-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.2497916716-radiosubquestion-4" value="strongly disagree" name="question.2018-04-18.2497916716-radiosubquestion">
<textarea name="question.2018-04-18.2497916716-textareasubquestion" id="question.2018-04-18.2497916716-textareasubquestion" class="form-control" data-test-hook="subquestion-textarea" rows="5"></textarea>
<input type="hidden" name="question.2018-04-18.7384765372-radiosubquestion" value="__deselected_radio_group">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7384765372-radiosubquestion-0" value="strongly agree" name="question.2018-04-18.7384765372-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7384765372-radiosubquestion-1" value="agree" name="question.2018-04-18.7384765372-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7384765372-radiosubquestion-2" value="neither agree or disagree" name="question.2018-04-18.7384765372-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7384765372-radiosubquestion-3" value="disagree" name="question.2018-04-18.7384765372-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7384765372-radiosubquestion-4" value="strongly disagree" name="question.2018-04-18.7384765372-radiosubquestion">
<textarea name="question.2018-04-18.7384765372-textareasubquestion" id="question.2018-04-18.7384765372-textareasubquestion" class="form-control" data-test-hook="subquestion-textarea" rows="5"></textarea>
<input type="hidden" name="question.2018-04-18.7701516171-radiosubquestion" value="__deselected_radio_group">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7701516171-radiosubquestion-0" value="strongly agree" name="question.2018-04-18.7701516171-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7701516171-radiosubquestion-1" value="agree" name="question.2018-04-18.7701516171-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7701516171-radiosubquestion-2" value="neither agree or disagree" name="question.2018-04-18.7701516171-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7701516171-radiosubquestion-3" value="disagree" name="question.2018-04-18.7701516171-radiosubquestion">
<input type="radio" data-test-hook="subquestion-radio" id="question.2018-04-18.7701516171-radiosubquestion-4" value="strongly disagree" name="question.2018-04-18.7701516171-radiosubquestion">
<textarea name="question.2018-04-18.7701516171-textareasubquestion" id="question.2018-04-18.7701516171-textareasubquestion" class="form-control" data-test-hook="subquestion-textarea" rows="5"></textarea>
<input type="hidden" name="form.submitted" value="1">
<input type="hidden" 
name="came_from" 
value="https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation/subpage.2018-04-18.1679384722/">`;


  var dfeSubmissionPage = `<input type="email" id="email" class="form-control" name="email" value="">
<input type="hidden" name="form.submitted" value="1">
<input type="hidden" name="form.button.submit">`;

  var dfePages = {
    consent: {
      name: 'consent',
      batch: 1,
      dfeTarget: 'subpage.2018-06-11.0090277436',
      formHTML: dfeFormConsent,
      questions: [
        {
          speakoutName: 'q[86]',
          type: 'radio',
          targetIds: {
            Yes: 'question.2018-06-11.0696472112-radiosubquestion-0',
            No: 'question.2018-06-11.0696472112-radiosubquestion-1'
          }
        },
        {
          speakoutName: 'q[87]',
          type: 'textarea',
          targetId: 'question.2018-06-11.1859110439-textareasubquestion'
        },
        {
          speakoutName: 'q[88][]',
          type: 'checkbox',
          targetIds: {
            yes: 'question.2018-06-11.0820412936-booleansubquestion'
          }
        }
      ]
    },
    personalDetails: {
      name: 'personalDetails',
      batch: 1,
      dfeTarget: 'intro',
      formHTML: dfeFormIntro,
      questions: [
        {
          speakoutName: 'survey_taker[name]',
          type: 'text',
          targetId: 'opsuite.respondentmanagement.name_subquestion'
        },
        {
          speakoutName: 'survey_taker[email]',
          type: 'text',
          targetId: 'quickconsult.email_subquestion'
        },
        {
          speakoutName: 'q[89]',
          type: 'select',
          targetId: 'question.2018-06-11.9682373257-selectsubquestion'
        },
        {
          speakoutName: 'q[90]',
          type: 'text',
          targetId: 'question.2018-06-11.9682373257-textsubquestion'
        }
      ]
    },
    questionsPage0: {
      name: 'questionsPage0',
      batch: 2,
      dfeTarget: 'TARGET',
      formHTML: dfeFormQuestionsPage0,
      questions: [
      ]
    },
    questionsPage1: {
      name: 'questionsPage1',
      batch: 3,
      dfeTarget: 'subpage.2018-04-16.0784244677',
      formHTML: dfeFormQuestionsPage1,
      questions: [
        {
          speakoutName: 'q[92]',
          type: 'radio',
          targetIds: {
            'strongly agree': 'question.2018-04-16.2195189970-radiosubquestion-0',
            'agree': 'question.2018-04-16.2195189970-radiosubquestion-1',
            'neither agree or disagree': 'question.2018-04-16.2195189970-radiosubquestion-2',
            'disagree': 'question.2018-04-16.2195189970-radiosubquestion-3',
            'strongly disagree': 'question.2018-04-16.2195189970-radiosubquestion-4',
          }
        },
        {
          speakoutName: 'q[93]',
          type: 'radio',
          targetIds: {
            'strongly agree': 'question.2018-04-16.4593421441-radiosubquestion-0',
            'agree': 'question.2018-04-16.4593421441-radiosubquestion-1',
            'neither agree or disagree': 'question.2018-04-16.4593421441-radiosubquestion-2',
            'disagree': 'question.2018-04-16.4593421441-radiosubquestion-3',
            'strongly disagree': 'question.2018-04-16.4593421441-radiosubquestion-4',
          }
        }
      ]
    },
    questionsPage2: {
      name: 'questionsPage2',
      batch: 3,
      dfeTarget: 'subpage.2018-04-18.1679384722',
      formHTML: dfeFormQuestionsPage2,
      questions: [
        {
          speakoutName: 'q[94]',
          type: 'radio',
          targetIds: {
            'strongly agree': 'question.2018-04-18.2497916716-radiosubquestion-0',
            'agree': 'question.2018-04-18.2497916716-radiosubquestion-1',
            'neither agree or disagree': 'question.2018-04-18.2497916716-radiosubquestion-2',
            'disagree': 'question.2018-04-18.2497916716-radiosubquestion-3',
            'strongly disagree': 'question.2018-04-18.2497916716-radiosubquestion-4',
          }
        },
        {
          speakoutName: 'q[95]',
          type: 'radio',
          targetIds: {
            'strongly agree': 'question.2018-04-18.7384765372-radiosubquestion-0',
            'agree': 'question.2018-04-18.7384765372-radiosubquestion-1',
            'neither agree or disagree': 'question.2018-04-18.7384765372-radiosubquestion-2',
            'disagree': 'question.2018-04-18.7384765372-radiosubquestion-3',
            'strongly disagree': 'question.2018-04-18.7384765372-radiosubquestion-4',
          }
        }
      ]
    },
    submissionPage: {
      name: 'submissionPage',
      batch: 3,
      dfeTarget: 'confirm_submit',
      formHTML: dfeSubmissionPage,
      questions: [
        {
          speakoutName: 'survey_taker[email]',
          type: 'text',
          targetId: 'email'
        }
      ]
    }
  };

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

    /** Find select inputs and clear first items */
    $('div.question select').each(function(){
      $(this).prepend($('<option value=""></option>'));
      $(this).val('');
    });

    /** Find email inputs and change type */
    // $('input[name="q[69]"]').attr('type', 'email');
    // $('input[name="q[83]"]').attr('type', 'email');

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
      'style="display: block; height: 600px; width: 600px; margin: 0;" ' +
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
      action="${uriBase}/${page.dfeTarget}" target="dfe" method="post" style="display: block; height: 600px; width: 600px;">` +
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
