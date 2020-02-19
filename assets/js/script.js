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
              },
							error: function(){
									console.log(" form fail!");
							}
						})
            return false;
          });



      })
