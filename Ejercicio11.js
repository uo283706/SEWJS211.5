class Geolocalizacion{
    constructor (){
    
    } 


    initMap(){

        var centro = {lat: 43.3672702, lng: -5.8502461};
        var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
            zoom: 8,
            center:centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
        var infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
    
                infoWindow.setPosition(pos);
                infoWindow.setContent('Localización encontrada');
                infoWindow.open(mapaGeoposicionado);
                mapaGeoposicionado.setCenter(pos);
              }, function() {
                handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
              });
            } else {
              handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
            }

    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Fallo de la geolocalización' :
                              'Error: No se soporta la geolocalización');
        infoWindow.open(mapaGeoposicionado);
    }

}
 
var mapa = new Object();

var localizacion = new Geolocalizacion();

mapa.initMap = localizacion.initMap;