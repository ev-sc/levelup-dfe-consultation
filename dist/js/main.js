(function() {
  var $;
  $(document).ready(function() {

    var uriBase = 'https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation';
    var pages = {
      consent: 'subpage.2018-06-11.0090277436'
    };

    $(`'<form action="${uriBase}/${pages.consent}/" target="dfe" method="post">'` +
      '<label for="text">Some text:</label>' +
      '<input type="text" name="text" id="text">' +
      '<input id="dfe-page-1" type="submit" value="post" style="visibility: hidden;">' +
      '</form>').appendTo('.survey-heading');

    $('a.js-next-block').click(function() {
      $('#dfe-page-1').trigger('click');
    });

    $('<iframe ' +
      'id="dfe" ' +
      'name="dfe" ' +
      'src="https://consult.education.gov.uk/pshe/relationships-education-rse-health-education/consultation/subpage.2018-06-11.0090277436/">' +
      '</iframe>').on('load').appendTo('.survey-heading');
  });

});

