function initMap() {
    var myLatlng = new google.maps.LatLng(50.400641, 30.529164);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatlng,
        scrollwheel: false,
        zoom: 17
    });
    var marker = new google.maps.Marker({
        map: map,
        position: myLatlng,
        title:"проспект Науки, 11А"
    });
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Украина, Киев, проспект Науки, 11А</p>'+
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}