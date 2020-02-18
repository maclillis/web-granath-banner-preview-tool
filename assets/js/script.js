$(document).ready(function(){

    // On submit event do the math!
    var form = document.getElementById("granath-form-wrapper");
    var output = document.getElementById("output");
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      var formWidth = document.getElementById('form_width');
      var formHeight = document.getElementById('form_height');
      var formClient = document.getElementById('form_client');
      var formURL = document.getElementById('form_url');

      /*var pTemplate = "<html lang='en' dir='ltr'> <head> <meta charset='utf-8'> <meta name='viewport' content='width=device-width, initial-scale=1'> <title>" + formClient + " - Banner preview</title> <style>@font-face{font-family: 'sourcesans'; src: url('http://dev.granathreklam.se/banners/assets/fonts/SourceSansPro-Regular.otf') format('opentype'); font-weight: normal; font-style: normal;}html, body{margin: 0px; font-family: 'sourcesans', 'Helvetica Neue', Arial, sans-serif; font-size: 13px; color: #4a4a4a; background-color: #e7c6cb;}iframe{border: 0;}#outer-wrapper{width: 100%; height: 100%; margin: 0; padding: 0;}#inner-wrapper{width: 980px; height: 200px; position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto; max-width: 100%; max-height: 100%; overflow: hidden; padding: 0 15px;}#banner-info{width: 100%; margin: 10px auto; display: flex; flex-direction: row;}#banner-dimension{width: 50%;}#banner-title{width: 50%; text-align: right;}#banner-iframe{width: 982px; height: 122px; margin: 0 auto; background-color: white; border: 6px solid #fff;}#granath-bg{width: 100%; height: 100%; background: url(http://dev.granathreklam.se/banners/assets/granathlogo.png) no-repeat; background-position: 50% 80%; background-size: 200px; position: absolute; top: 0; left: 0;}</style> </head> <body> <div id='outer-wrapper'> <div id='granath-bg'></div><div id='inner-wrapper'> <iframe src=" + formURL + " id='banner-iframe'></iframe> <div id='banner-info'> <div id='banner-dimension'>" + formWidth.value + 'x' + formHeight.value + "</div><div id='banner-title'>"+ formClient.value + "</div></div></div></div></body></html>";*/

      /*var blob = new Blob(['\ufeff' + pTemplate], {
        type: "text/html;charset=utf-8"
      });
      saveAs(blob, "preview.html");*/
  });
})
