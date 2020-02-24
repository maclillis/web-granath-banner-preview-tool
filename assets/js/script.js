$(document).ready(function() {

  // Nifty form handling in AJAX
  function sendFormPOST(){
      var formdata = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "../generator/form.php",
        data: formdata,
        success: function() {
          console.log("form sucess!");
          $('#granath-form-wrapper').fadeOut('fast');
  
          setTimeout(function() {
            $('#granath-sucess-wrapper').fadeIn('fast');
          }, 300);
        },
        error: function() {
  
          $('#granath-form-wrapper').fadeOut('fast');
  
          setTimeout(function() {
            $('#granath-fail-wrapper').fadeIn('fast');
          }, 300);
        }
      })
      return false;
  }

  // Validation through jQuery Validate
  $("#granath-form-wrapper").validate({
    errorContainer: "#error-wrapper",
    errorLabelContainer: "#error-wrapper",
    wrapper: "li",
    rules: {
      height: {
        required: true
      },
      width: {
        required: true
      },
      client: {
        required: true
      },
      banner_url: {
        required: true,
        url: true
      }
    },
    messages: {
      width: "Fyll i bredd!",
      height: "Fyll i höjd!",
      client: "Fyll i kund!",
      banner_url: "Fyll i adress!",
      url: "Se till att det är en giltig address"
    },
    submitHandler: function() {
      sendFormPOST();
		}
  });
  
  // Add padding to error-elements on invalid form
  $("#granath-form-wrapper").bind("invalid-form.validate", function() {
    $("#error-wrapper").css({padding:"20px"});
  });

  //Copy to clipboard button
  $('#clipboard_btn').click(function() {
      /* Get the text field */
      var copyText = document.getElementById("preview_url");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");

      $("#clipboard_btn").animate({backgroundColor: "#517d51"}, 100);
      $("#clipboard_btn").html('Kopierad!');
  });

  $('#back_btn').click(function(){
    $('#granath-fail-wrapper').fadeOut('fast');

    setTimeout(function() {
      $('#granath-form-wrapper').fadeIn('fast');
    }, 300);
  });



})
