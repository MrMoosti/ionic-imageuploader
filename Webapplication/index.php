<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Image Uploader</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <link href="index.css" rel="stylesheet" />
  </head>
  <body>
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Ionic Image Uploader</span>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h1>Connect your app</h1>
          <p>
            <i>Connect your phone by scanning<br />the QR-code below</i>
          </p>
          <div class="card qr">
            <img
              src="https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=http://myilmaz.gcmediavormgeving.nl/Image_Uploader/upload.php"
            />
          </div>
        </div>
        <div class="col-md-7">
          <h1>Uploaded images</h1>
          <div id="images"> 
          </div>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
