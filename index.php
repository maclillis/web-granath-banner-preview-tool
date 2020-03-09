<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="googlebot" content="noindex">
  <meta name="googlebot-news" content="nosnippet">
  <title>Testlänksgeneratorn 0.6 | GRANATH</title>
  <link rel="icon" type="image/png" sizes="32x32" href="https://granathreklam.se/wp-content/themes/Granath/images/grafik/favicons/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://granathreklam.se/wp-content/themes/Granath/images/grafik/favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://granathreklam.se/wp-content/themes/Granath/images/grafik/favicons/favicon-16x16.png">
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js" integrity="sha256-sPB0F50YUDK0otDnsfNHawYmA5M0pjjUf4TvRJkGFrI=" crossorigin="anonymous"></script>
  <link href="assets/css/style.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js"></script>
</head>

<body>
  <div id="outer-wrapper">
    <h1 class="site-title">Testlänksgeneratorn <sup>v.0.6</sup></h1>
    <div id="inner-wrapper">

      <div id="granath-fail-wrapper">
        <div id="granath-fail">
          <img src="assets/img/exclamation-circle-regular.svg" id="badge-fail" />
          <h3 class="after-h3">Något gick fel!</h3>
          <h4 class="after-h4">Länken skapades inte, försök igen</h4>
          <button name="back_btn" class="after-btn-error" id="back_btn">Tillbaka</button>
        </div>
      </div>
    <div id="granath-form-wrapper">
      <form id="granath-form" method="post" action="form.php">
      <div class="form-title">
            <h2>Välj alternativ</h2>
          </div>
        <div class="form-col">
          <div class="dimensions">
            <input type="number" name="width" placeholder="Bredd" id="form_width" />
            <span style="font-size:18px;">x</span>
            <input type="number" name="height" placeholder="Höjd" id="form_height" />
          </div>
        </div>
        <div class="form-col">
          <input type="text" name="client" placeholder="Kund" id="form_client" />
        </div>
        <div class="form-col">
          <input type="text" name="banner_url" placeholder="Banner URL" id="form_url" />
        </div>
        <hr class="separator" />
        <button type="submit" name="submit" value="submit" id="submit_btn">Generera!</button>
      </form>
    </div>

      <div id="granath-sucess-wrapper">
        <div id="granath-sucess">
        <svg id="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.71 504.71">
          <path id="check-badge" d="M512,256a88,88,0,0,0-57.1-82.4A88,88,0,0,0,338.4,57.1a88,88,0,0,0-164.8,0A88,88,0,0,0,57.1,173.6a88,88,0,0,0,0,164.8A88,88,0,0,0,173.6,454.9a88,88,0,0,0,164.8,0A88,88,0,0,0,454.9,338.4,88,88,0,0,0,512,256Z" transform="translate(-3.65 -3.65)"/>
          <path id="check-mark" class="cls-1" d="M368.63,211.33l-131,130a11,11,0,0,1-15.55-.06l-75.72-76.33a11,11,0,0,1,.06-15.56l26-25.82a11,11,0,0,1,15.56.06l42.15,42.49,97.21-96.42a11,11,0,0,1,15.54.06l25.83,26a11,11,0,0,1-.06,15.56Z" style="fill:white;" />
        </svg>
          <h3 class="after-h3">Klart!</h3>
          <h4 class="after-h4">Använd länken nedan</h4>
          <div id="clipboard_wrapper">
            <label id="clip_complete">Kopierad!</label>
            <input type="text" name="preview_url" id="preview_url" value=" " readonly />
            <button name="clipboard_btn" class="after-btn" id="clipboard_btn">Kopiera</button>
          </div>
        </div>
      </div>
      <div id="granath-bg"></div>

  </div>
  </div>
  <script src="assets/js/script.js" type="text/javascript"></script>
</body>

</html>
