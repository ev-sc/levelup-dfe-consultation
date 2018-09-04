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
<option value="Christian (Church of England, Catholic, Protestant, Orthodox and all other Christian denominations)">Christian (Church of England, Catholic, Protestant, Orthodox and all other Christian denominations)</option>
<option value="Buddhist">Buddhist</option>
<option value="Hindu">Hindu</option>
<option value="Jewish">Jewish</option>
<option value="Muslim">Muslim</option>
<option value="Sikh">Sikh</option>
<option value="No religion">No religion</option>
<option value="Prefer not to say">Prefer not to say</option>
<option value="Other religion (please write below – free text)">Other religion (please write below – free text)</option>
</select>
<input type="text" class="form-control" data-test-hook="subquestion-text" value="" name="question.2018-04-17.3554038099-textsubquestion" id="question.2018-04-17.3554038099-textsubquestion">
<select data-test-hook="subquestion-select" name="question.2018-04-17.6432127774-selectsubquestion-1" id="question.2018-04-17.6432127774-selectsubquestion-1">
<option value="">-- Please Select --</option>
<option value="White - British/English/Scottish/Welsh/Northern Irish">White - British/English/Scottish/Welsh/Northern Irish</option>
<option value="White - Irish">White - Irish</option>
<option value="White - Gypsy or Irish Traveller">White - Gypsy or Irish Traveller</option>
<option value="White - Any other white background">White - Any other white background</option>
<option value="Mixed/Multiple - White and Black Caribbean">Mixed/Multiple - White and Black Caribbean</option>
<option value="Mixed/Multiple - White and Black African">Mixed/Multiple - White and Black African</option>
<option value="Mixed/Multiple - White and Asian">Mixed/Multiple - White and Asian</option>
<option value="Mixed/Multiple - Any other mixed background">Mixed/Multiple - Any other mixed background</option>
<option value="Asian/Asian British - Indian">Asian/Asian British - Indian</option>
<option value="Asian/Asian British - Pakistani">Asian/Asian British - Pakistani</option>
<option value="Asian/Asian British - Bangladeshi">Asian/Asian British - Bangladeshi</option>
<option value="Asian/Asian British - Chinese">Asian/Asian British - Chinese</option>
<option value="Asian/Asian British - Any other Asian background">Asian/Asian British - Any other Asian background</option>
<option value="Black/African/Caribbean/Black British - African">Black/African/Caribbean/Black British - African</option>
<option value="Black/African/Caribbean/Black British - Caribbean">Black/African/Caribbean/Black British - Caribbean</option>
<option value="Black/African/Caribbean/Black British - Any other Black background">Black/African/Caribbean/Black British - Any other Black background</option>
<option value="Other ethnic group  - Arab">Other ethnic group  - Arab</option>
<option value="Other ethnic group  - Any other ethnic group">Other ethnic group  - Any other ethnic group</option>
<option value="Prefer not to say">Prefer not to say</option>
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

  var dfeFormQuestionsPage3 = `<input type="hidden" name="__userinfo_cs_version" value="v3.11.3-v3-frontend">
<textarea name="question.2018-06-11.6085874157-textareasubquestion" id="question.2018-06-11.6085874157-textareasubquestion" class="form-control" data-test-hook="subquestion-textarea" rows="5"></textarea>
<input type="hidden" name="form.submitted" value="1">
<input type="hidden" 
name="came_from" 
value="https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation/subpage.2018-06-11.5296214505/">`;

  var dfeSubmissionPage = `<input type="email" id="email" class="form-control" name="email" value="">
<input type="hidden" name="form.submitted" value="1">
<input type="hidden" name="form.button.submit">`;


  var uriBase = 'https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation';
  var iframeSubmitting = false;
  var finalPage = false;
  var activePageId = 'consent';
  var userEmail = '';
  var spinner = '<div id="surveySpinner" style="display:none; width: 100%; height: 80px; text-align: center; margin-bottom: 100px;"><img ' +
    'src="https://rawgit.com/lowlandjuju/levelup-dfe-consultation/master/Wedges-3s-97px.svg" /><p>Loading next page...</p></div>';

  var dfePages = {
    consent: {
      name: 'consent',
      dfeTarget: 'subpage.2018-06-11.0090277436',
      identifier: 'survey-question-id-65',
      nextPage: 'personalDetails',
      formHTML: dfeFormConsent,
      questions: [
        {
          speakoutName: 'q[65]',
          type: 'radio',
          targetIds: {
            Yes: 'question.2018-06-11.0696472112-radiosubquestion-0',
            No: 'question.2018-06-11.0696472112-radiosubquestion-1'
          }
        },
        {
          speakoutName: 'q[66]',
          type: 'textarea',
          targetId: 'question.2018-06-11.1859110439-textareasubquestion'
        },
        {
          speakoutName: 'q[67][]',
          type: 'checkbox',
          targetIds: {
            yes: 'question.2018-06-11.0820412936-booleansubquestion'
          }
        }
      ]
    },
    personalDetails: {
      name: 'personalDetails',
      dfeTarget: 'intro',
      identifier: 'survey-question-id-68',
      nextPage: 'questionsPage1',
      formHTML: dfeFormIntro,
      questions: [
        {
          speakoutName: 'q[68]',
          type: 'text',
          targetId: 'opsuite.respondentmanagement.name_subquestion'
        },
        {
          speakoutName: 'q[69]',
          type: 'text',
          targetId: 'quickconsult.email_subquestion'
        },
        {
          speakoutName: 'q[70]',
          type: 'select',
          targetId: 'question.2018-04-17.3554038099-selectsubquestion'
        },
        {
          speakoutName: 'q[71]',
          type: 'text',
          targetId: 'question.2018-04-17.3554038099-textsubquestion'
        },
        {
          speakoutName: 'q[72]',
          type: 'select',
          targetId: 'question.2018-04-17.6432127774-selectsubquestion-1'
        },
        {
          speakoutName: 'q[73]',
          type: 'select',
          targetId: 'question.2018-06-11.9682373257-selectsubquestion'
        },
        {
          speakoutName: 'q[74]',
          type: 'text',
          targetId: 'question.2018-06-11.9682373257-textsubquestion'
        }
      ]
    },
    questionsPage1: {
      name: 'questionsPage1',
      dfeTarget: 'subpage.2018-04-16.0784244677',
      identifier: 'survey-question-id-75',
      nextPage: 'questionsPage2',
      formHTML: dfeFormQuestionsPage1,
      questions: [
        {
          speakoutName: 'q[75]',
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
          speakoutName: 'q[78]',
          type: 'radio',
          targetIds: {
            'strongly agree': 'question.2018-04-16.4593421441-radiosubquestion-0',
            'agree': 'question.2018-04-16.4593421441-radiosubquestion-1',
            'neither agree or disagree': 'question.2018-04-16.4593421441-radiosubquestion-2',
            'disagree': 'question.2018-04-16.4593421441-radiosubquestion-3',
            'strongly disagree': 'question.2018-04-16.4593421441-radiosubquestion-4',
          }
        },
        {
          speakoutName: 'q[79]',
          type: 'radio',
          targetIds: {
            'strongly agree': 'question.2018-04-16.5897528280-radiosubquestion-0',
            'agree': 'question.2018-04-16.5897528280-radiosubquestion-1',
            'neither agree or disagree': 'question.2018-04-16.5897528280-radiosubquestion-2',
            'disagree': 'question.2018-04-16.5897528280-radiosubquestion-3',
            'strongly disagree': 'question.2018-04-16.5897528280-radiosubquestion-4',
          }
        }
      ]
    },
    questionsPage2: {
      name: 'questionsPage2',
      dfeTarget: 'subpage.2018-04-18.1679384722',
      identifier: 'survey-question-id-84',
      nextPage: 'questionsPage3',
      formHTML: dfeFormQuestionsPage2,
      questions: [
        {
          speakoutName: 'q[84]',
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
          speakoutName: 'q[85]',
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
    questionsPage3: {
      name: 'questionsPage3',
      dfeTarget: 'subpage.2018-06-11.5296214505',
      identifier: 'survey-question-id-81',
      nextPage: 'submissionPage',
      formHTML: dfeFormQuestionsPage3,
      questions: [
        {
          speakoutName: 'q[81]',
          type: 'textarea',
          targetId: 'question.2018-06-11.6085874157-textareasubquestion'
        },
      ]
    },
    submissionPage: {
      name: 'submissionPage',
      dfeTarget: 'confirm_submit',
      identifier: 'survey-question-id-83',
      nextPage: '',
      formHTML: dfeSubmissionPage,
      questions: [
        {
          speakoutName: 'q[83]',
          type: 'text',
          targetId: 'email'
        }
      ]
    }
  };

  /** Generate hidden forms */
  Object.values(dfePages).forEach(function(page){
    var final = page.name === 'submissionPage' ? true : null;
    $(formGenerator(page, uriBase, final)).appendTo('#heading-container');
  });

  /** Load DfE consulation into iframe with initial page */
  $('<iframe ' +
    'id="dfe" ' +
    'name="dfe" ' +
    'style="visibility: hidden; height: 0; width: 90%; margin: 5%;" ' +
    `src="${uriBase}/${dfePages[activePageId].dfeTarget}/">` +
    '</iframe>')
    .on('load', function(){
      var currentPage = dfePages[activePageId];
      if (iframeSubmitting) { /** If reload after form submitted, load next DfE consulation page */
        if (finalPage) {
          console.log('final page submitting...');
          iframeSubmitting = false;
          return window.test_submit();
        } else {
          console.log('DfE page loading after POST');
          activePageId = currentPage.nextPage;
          var nextPageUri = dfePages[activePageId].dfeTarget;
          iframeSubmitting = false;
          $('#dfe').attr('src', `${uriBase}/${nextPageUri}`);
        }
      } else {
        console.log('DfE page loading after src change');
        $('.js-question-blocks').show();
        $('#surveySpinner').hide();
        if (currentPage.name !== 'submissionPage') $('a.js-next-block').show();
      }
    }).appendTo('#heading-container');

  /** Find select inputs and clear first items */
  $('div.question select').each(function(){
    $(this).prepend($('<option value=""></option>'));
    $(this).val('');
  });

  /** Find email inputs and change type */
  $('input[name="q[69]"]').attr('type', 'email');
  $('input[name="q[83]"]').attr('type', 'email');

  /** Add spinner */
  $('#survey-form').prepend(spinner);

  /**
   * This is where the data from each page of our standard Speakout survey gets entered into
   * the fields of our hidden forms, each of which has target="dfe" set where dfe is the name/ID of
   * the iframe in which the DfE consultation form is loaded
   */
  $('a.js-next-block').click(function(e) {
    var page = dfePages[activePageId];

    /** Check if this is a page for submission to the DfE form */
    var SpeakoutQuestionIds = $(e.target)
      .closest('form#survey-form')
      .find('div.question-block:visible')
      .find('.question')
      .map(function(){return this.id;}).get();
    var doSubmit = SpeakoutQuestionIds !== null && SpeakoutQuestionIds.includes(page.identifier)
      // eslint-disable-next-line no-undef
      && validate_form($(e.target).closest('form#survey-form'));

    /** Submit hidden form to DfE iframe  */
    if (page && doSubmit === true) {
      $('.js-question-blocks').hide();
      $('#surveySpinner').show();
      $('a.js-next-block').hide();
      /** Load Speakout survey data into hidden form */
      page.questions.forEach(function(question) {
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

          if (question.targetId === 'quickconsult.email_subquestion' && text.length > 0) {
            /** If email provided already, hide from final page */
            userEmail = text;
            console.log('user email set to: ' + userEmail);
            $('#survey-question-id-83 div.form-group').hide();
            $('#survey-question-id-83')
              .append('<p>When you submit your response, you will be sent a receipt and a link to a PDF copy of your response.</p>')
              .css({'background-color': '#f3f3f3', 'padding': '20px'});
          }
          break;
        case 'textarea':
          var textarea = $(`textarea[name='${question.speakoutName}']`).val();
          target.val(textarea);
          break;
        default:
          break;
        }
      });

      iframeSubmitting = true; /** Set flag so iframe listener knows to load next form page */
      $(`#${page.name}-form`).submit(); /** Trigger DfE iframe submission */
    }
  });

  /**
   * Submit complete form to DfE
   */
  var submitButton = $('a.js-submit-survey');
  submitButton.removeAttr('onclick');
  submitButton.click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    finalPage = true;
    var page = dfePages[activePageId];
    $('.js-question-blocks').hide();
    $('#surveySpinner p').html('Submitting your answers to the Department for Education...');
    $('#surveySpinner').show();

    /** Submit hidden form to DfE iframe  */
    if (page) {
      /** Load Speakout survey data into hidden form */
      page.questions.forEach(function(question) {
        if (question.targetId === 'email') {
          console.log('user email retrieved: ' + userEmail);
          $(`input[name='${question.speakoutName}']`).val(userEmail);
          $('#email').val(userEmail);
        }
      });

      iframeSubmitting = true; /** Set flag so iframe listener knows to load next form page */
      $(`#${page.name}-form`).submit(); /** Trigger DfE iframe submission */
    }
  });

});

function formGenerator(page, uriBase, final) {
  return $(`<form ${!final && 'enctype="multipart/form-data"'} id="${page.name}-form"
      action="${uriBase}/${page.dfeTarget}" target="dfe" method="post" style="visibility: hidden; height: 0;">` +
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
