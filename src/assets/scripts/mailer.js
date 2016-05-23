$(function() {
  'use strict';

  var form = '#ajax-contact';
  var form_message = '#form-message';
  var form_loader = '#form-loader';
  var submit = '#submit';

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {

    // Stop the browser from submitting the form.
    event.preventDefault();

    // Show loader while gathering data
    $(form_loader).addClass('is-visible');
    $(form_message).addClass('callout');

    var formData = $(form).serialize();

    $.ajax({
      type: 'POST', // specifies the HTTP method that will be used for the request
      url: $(form).attr('action'), // location of the script that the form data will be sent to
      data: formData
    })

    .success(function(response) {
      // Make sure that the form_message div has the 'success' class.
      $(form_message).removeClass('alert');
      $(form_message).addClass('success');

      // Set the message text.
      $(form_message).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
      $(submit).addClass('disabled');

    })

    .fail(function(data) {
      // Make sure that the form_message div has the 'alert' class.
      $(form_message).removeClass('success');
      $(form_message).addClass('alert');

      // Set the message text.
      if (data.responseText !== '') {
        $(form_message).text(data.responseText);
      } else {
        $(form_message).text('Oops! An error occured and your message could not be sent.');
      }
    })

    .complete(function() {
      // Hide loader when finished processing data
      $(form_loader).removeClass('is-visible');
    });
  });
});
