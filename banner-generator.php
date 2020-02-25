<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="googlebot" content="noindex">
  <meta name="googlebot-news" content="nosnippet">
  <title>Testlänksgeneratorn 0.5 | GRANATH</title>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js" integrity="sha256-sPB0F50YUDK0otDnsfNHawYmA5M0pjjUf4TvRJkGFrI=" crossorigin="anonymous"></script>
  <link href="assets/css/style.css" rel="stylesheet" />
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.0/gsap.min.js"></script>
</head>

<body>
  <div id="outer-wrapper">
    <h1 class="site-title">Testlänksgeneratorn <sup>v.0.5</sup></h1>
    <div id="inner-wrapper">

      <div id="granath-fail-wrapper">
        <div id="granath-fail">
          <img src="assets/img/exclamation-circle-regular.svg" class="badge-check" />
          <h3 class="after-h3">Något gick fel!</h3>
          <h4 class="after-h4">Länken skapades inte, försök igen</h4>
          <button name="back_btn" class="after-btn-error" id="back_btn">Tillbaka</button>
        </div>
      </div>
    <div id="granath-form-wrapper">
      <form id="granath-form">
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
          <path id="check-badge" d="M309.17,5.58a88,88,0,0,0-92.46,38.74A88,88,0,0,0,78.55,134.08,88,88,0,0,0,44.32,295.29a88,88,0,0,0,89.76,138.16,88,88,0,0,0,161.21,34.23,88,88,0,0,0,138.16-89.76,88,88,0,0,0,34.23-161.21A88,88,0,0,0,377.92,78.55,88,88,0,0,0,309.17,5.58Zm58,206.17-131,130a11,11,0,0,1-15.55-.06l-75.72-76.33a11,11,0,0,1,.06-15.56L171,224a11,11,0,0,1,15.56.06l42.15,42.49,97.2-96.42a11,11,0,0,1,15.55.06l25.82,26a11,11,0,0,1-.06,15.56Z" transform="translate(-3.65 -3.65)"/>
        </svg>
          <h3 class="after-h3">Klart!</h3>
          <h4 class="after-h4">Använd länken nedan</h4>
          <div id="clipboard_wrapper">
            <input type="text" name="preview_url" id="preview_url" value="https://www.granathreklam.se" readonly />
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
