<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GIS</title>

    <!-- IMPORTED EXTERNAL JS AND CSS -->
    <!-- ---------------------------- -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>

    <!-- import jquery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/leaflet/js/MarkerCluster.css">
    <link rel="stylesheet" href="assets/leaflet/js/MarkerCluster.Default.css">

    <script src="assets/leaflet/js/leaflet.markercluster.js"></script>
    <script src="assets/js/moment.min.js"></script>
    <!-- ---------------------------- -->
    <!-- ---------------------------- -->

</head>

<body>
    <input type="checkbox" id="check">
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
        <header>GIS PAS</header>
        <ul>
            <li>
                <div class="wrapper">
                    <label for=" periode">Periode:</label>
                    <input type="month" id="periode" name="periode" onchange="handler(event)">
                    <p style="color:white" id="text"></p>
                </div>
            </li>
            <li>
                <div class="wrapper">
                    <input onclick="showLabel(this)" type="checkbox" class="checkbox" id="label" name="label">
                    <label class="chkbx_label" for="label">Label</label>
                </div>
            </li>
            <li>
                <div class="wrapper">
                    <input onclick="pilihCUS(this)" type="checkbox" class="checkbox" id="CUS" name="opsi1" value="CUS">
                    <label class="chkbx_label" for="opsi1">CUS</label>
                </div>
            </li>
            <li>
                <div class="wrapper">
                    <input onclick="pilihJV(this)" type="checkbox" class="checkbox" id="JV" name="opsi2" value="JV">
                    <label class="chkbx_label" for="opsi2">JV</label>
                </div>
            </li>
            <li>
                <div class="wrapper">
                    <input onclick="pilihMAR(this)" type="checkbox" class="checkbox" id="MAR" name="opsi3" value="MAR">
                    <label class="chkbx_label" for="opsi3">MAR</label>
                </div>
            </li>
            <!-- <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
            <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
            <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
            <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
            <li><a href="#"><i class="fas fa-question-circle"></i>About</a></li>
            <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="#"><i class="fas fa-envelope"></i>Contact</a></li> -->
        </ul>
    </div>
    <section>
        <div id="map"></div>
    </section>

</body>

<script src="assets/js/geojson.js"></script>

</html>