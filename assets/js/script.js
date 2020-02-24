$(document).ready(function() {

  // Nifty form handling in AJAX
  function sendFormPOST(){
      var formdata = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "../generator/form.php",
        data: formdata
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
    errorContainer: "#granath-form-wrapper",
    errorLabelContainer: "#granath-form-wrapper",
    groups: {
      dimensions: "width height"
    },
    errorPlacement: function(error, element) {
      if (element.attr("name") == "width" || element.attr("name") == "height" ) {
        error.insertAfter("#granath-form-wrapper");
      } else {
        error.insertAfter(element);
      }
    },
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
      width: "Fyll i mått!",
      height: "Fyll i mått!",
      client: "Fyll i kund!",
      banner_url: "Fyll i adress!",
      url: "Se till att det är en giltig address"
    },
    submitHandler: function() {
      sendFormPOST();
		}
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
