let marcador;
let coords = {};

initMap = function () {
    const restaurante = { lat: 40.40733858188084, lng: -3.6487218826694687 };
    
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: restaurante,
  });
 
  const marker = new google.maps.Marker({
    position: restaurante,
    map: map,
  });
}