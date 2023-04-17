var map = L.map('map', {
    zoomControl: false
}).setView([-1.012339298029488, 110.23044701053067], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// GEO JSON CUS ----------------------------
var lyr_cus = L.markerClusterGroup();
$.getJSON('assets/geojson/CUS.geojson',
    function (json) {
        geoLayer = L.geoJson(json, {
            style: function (feature, layer) {
                // if (1 > 0) {
                //     myColor = "red";
                // } else {
                //     myColor = "orange";
                // }
                return {
                    fillOpacity: 0.5,
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.3,
                    color: "orange",
                };
            },
            onEachFeature: function (feature, layer) {
                layer.on('click', (e) => {
                    _date = document.getElementById('periode').value;
                    periode = moment(_date).format("YYYYMM");
                    $.getJSON('data/' + feature.properties.COSTCENTER + '&' + periode, function (detail) {
                        $.each(detail, function (index) {
                            var html =
                                `<div>
                                <p>
                                    Estate: ` + detail[index].EstateCode + `<br>
                                    Blok: ` + detail[index].BlockCode + `<br>
                                    Tahun Tanam: ` + detail[index].PlantingYear + `<br>
                                    Budget per-Bulan: ` + detail[index].FFBYield + `
                                </p>
                            </div>`


                            // var html = '<div><h5>Blok: ' + detail[index].BlockCode + '  </h5>';
                            // html += '<h5>Tahun Tanam: ' + detail[index].PlantingYear + '</h5></div>'

                            L.popup()
                                .setLatLng(layer.getBounds().getCenter())
                                .setContent(html)
                                .openOn(map);
                        })
                    })
                })
                lyr_cus.addLayer(layer)
                // layer.addTo(map);
            }
        })
    });
function pilihCUS(v) {
    if (v.checked) {
        map.addLayer(lyr_cus);
        map.flyTo(lyr_cus.getBounds().getCenter(), 14)
    } else {
        map.removeLayer(lyr_cus)
    }
}
// GEO JSON CUS ----------------------------

// GEO JSON JV ----------------------------
var lyr_jv = L.markerClusterGroup();
$.getJSON('assets/geojson/JV.geojson',
    function (json) {
        geoLayer = L.geoJson(json, {

            style: function (feature, layer) {
                return {
                    fillOpacity: 0.5,
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.3,
                    color: 'grey',
                };
            },
            onEachFeature: function (feature, layer) {
                layer.on('click', (e) => {
                    _date = document.getElementById('periode').value;
                    periode = moment(_date).format("YYYYMM");
                    $.getJSON('data/' + feature.properties.COSTCENTER + '&' + periode, function (detail) {
                        $.each(detail, function (index) {
                            var html =
                                `<div>
                                <p>
                                    Estate: ` + detail[index].EstateCode + `<br>
                                    Blok: ` + detail[index].BlockCode + `<br>
                                    Tahun Tanam: ` + detail[index].PlantingYear + `<br>
                                    Budget per-Bulan: ` + detail[index].FFBYield + `
                                </p>
                            </div>`


                            // var html = '<div><h5>Blok: ' + detail[index].BlockCode + '  </h5>';
                            // html += '<h5>Tahun Tanam: ' + detail[index].PlantingYear + '</h5></div>'

                            L.popup()
                                .setLatLng(layer.getBounds().getCenter())
                                .setContent(html)
                                .openOn(map);
                        })
                    })
                })
                lyr_jv.addLayer(layer);

                // layer.addTo(map);
            }
        })
    });
function pilihJV(v) {
    if (v.checked) {
        map.addLayer(lyr_jv);
        map.flyTo(lyr_jv.getBounds().getCenter(), 14)
    } else {
        map.removeLayer(lyr_jv);
    }
}
// GEO JSON JV ----------------------------

// GEO JSON MAR ----------------------------
var lyr_mar = L.markerClusterGroup();
$.getJSON('assets/geojson/MARKR.geojson',
    function (json, e) {
        geoLayer = L.geoJson(json, {

            style: function (feature, layer) {
                return {
                    fillOpacity: 0.5,
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.3,
                    color: '#73a9ff',
                };
            },
            onEachFeature: function (feature, layer) {
                layer.on('click', (e) => {
                    _date = document.getElementById('periode').value;
                    periode = moment(_date).format("YYYYMM");
                    $.getJSON('data/' + feature.properties.COSTCENTER + '&' + periode, function (detail) {
                        $.each(detail, function (index) {
                            var html =
                                `<div>
                                <p>
                                    Estate: ` + detail[index].EstateCode + `<br>
                                    Blok: ` + detail[index].BlockCode + `<br>
                                    Tahun Tanam: ` + detail[index].PlantingYear + `<br>
                                    Budget per-Bulan: ` + detail[index].FFBYield + `
                                </p>
                            </div>`


                            // var html = '<div><h5>Blok: ' + detail[index].BlockCode + '  </h5>';
                            // html += '<h5>Tahun Tanam: ' + detail[index].PlantingYear + '</h5></div>'

                            L.popup()
                                .setLatLng(layer.getBounds().getCenter())
                                .setContent(html)
                                .openOn(map);
                        })
                    })
                })
                lyr_mar.addLayer(layer);

                // layer.addTo(map);
            }
        })
    });
function pilihMAR(v) {
    if (v.checked) {
        map.addLayer(lyr_mar);
        map.flyTo(lyr_mar.getBounds().getCenter(), 14)
    } else {
        map.removeLayer(lyr_mar);
    }
}
// GEO JSON MAR ----------------------------

var valueList = document.getElementById('valueList');
var text = `<span> you've selected : </span>`;
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked) {
            listArray.push(this.value);
            // valueList.innerHTML = text + listArray;
        }
        else {
            listArray = listArray.filter(e => e !== this.value);
            // valueList.innerHTML = text + listArray;
            if (listArray.includes("MAR")) {
                map.flyTo(lyr_mar.getBounds().getCenter(), 14)
            }
            else if (listArray.includes("CUS")) {
                map.flyTo(lyr_cus.getBounds().getCenter(), 14)
            }
            else if (listArray.includes("JV")) {
                map.flyTo(lyr_jv.getBounds().getCenter(), 14)
            }
            else {
                map.flyTo([-1.012339298029488, 110.23044701053067], 9)
            }
        }
    })
}

// SET DEFAULT DATE VALUE ----------------------------
document.getElementById('periode').valueAsDate = new Date();


// function showLabel(v) {
//     if (v.checked) {
//         alert("HALO")
//     } else {

//     }
// }