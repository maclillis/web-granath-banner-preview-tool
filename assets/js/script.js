$(document).ready(function() {

  //Form handling in AJAX
  $('#granath-form-wrapper').submit(function() {
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

  });

  $('#back_btn').click(function(){
    $('#granath-fail-wrapper').fadeOut('fast');

    setTimeout(function() {
      $('#granath-form-wrapper').fadeIn('fast');
    }, 300);
  });



})
