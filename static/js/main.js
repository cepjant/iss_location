$(document).ready(function(){

    var map;
    var mapContainer = $('#map');
    let markers =  [];

    mapContainer.width('70%').height(500);

    function getISSPosition() {
        var data = $.parseJSON($.ajax({
          type: "GET",
          url: "/api/iss/",
          dataType: 'json',
          async: false,
          data: null,
          }).responseText);
        console.log(data);
        return data
    };

    function initialize() {

        issPosition = getISSPosition();
        longitude = issPosition.longitude;
        latitude = issPosition.latitude;

        var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 2,
            mapTypeId: 'terrain'
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }

    function delMarker() {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    };


    function updateMarker() {

        issPosition = getISSPosition();
        longitude = issPosition.longitude;
        latitude = issPosition.latitude;

        delMarker();


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            title: 'Marker',
            map: map,
            draggable: true
        });
        markers.push(marker);

    }

    initialize();

    setInterval(updateMarker, 2000);



//        function showInfo(event) {
//            infoBox.setContent('описание');
//            infoBox.open(map);
//            map.setCenter(coords);
//        }

});