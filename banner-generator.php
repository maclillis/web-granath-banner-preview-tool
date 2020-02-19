<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Granath Banner Preview Generator</title>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <link href="assets/css/style.css" rel="stylesheet" />
</head>

<body>
  <div id="outer-wrapper">
    <div id="granath-bg"></div>
    <h1 class="site-title">Banner Preview Generator <sup>v.0.5</sup></h1>
    <div id="inner-wrapper">
      <form id="granath-form-wrapper">
        <div class="form-col">
          <div class="form-title">
            <h2>Välj alternativ</h2>
          </div>
          <div class="dimensions">
            <input type="number" name="width" placeholder="Bredd" id="form_width" />
            <span>x</span>
            <input type="number" name="height" placeholder="Höjd" id="form_height" />
          </div>
        </div>
        <div class="form-col">
          <input type="text" name="client" placeholder="Kund" id="form_client" />
        </div>
        <div class="form-col">
          <input type="text" name="banner_url" placeholder="Banner URL" id="form_url" />
        </div>
        <!--<div class="form-col">
          <input type="text" name="preview_location" placeholder="Preview URL" />
        </div>-->
        <hr class="separator" />
        <button type="submit" name="submit" value="submit">Generera</button>
      </form>
    </div>
    <pre id="output"></pre>
  </div>
  <script src="assets/js/script.js" type="text/javascript"></script>
</body>

</html>
