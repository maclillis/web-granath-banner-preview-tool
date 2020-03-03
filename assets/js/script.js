$(document).ready(function() {

  // Nifty form handling in AJAX
  function sendFormPOST(){
      var formdata = $(this).serialize();
      var formArray = $("form").serializeArray(),
      len = formArray.length,
      formObj = {};

      for (i=0; i<len; i++) {
        formObj[formArray[i].name] = formArray[i].value;
      }

      var previewUrl = formObj['banner_url']; 
      previewUrl = previewUrl.substr(0, previewUrl.lastIndexOf("/") + 1) + 'preview.html' ;

      $.ajax({
        type: "POST",
        url: "../generator/form.php",
        data: formdata,
        success: function() {
          $('#preview_url').val(previewUrl);
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
  $("#granath-form").validate({
    groups: {
      dimensions: "width height"
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