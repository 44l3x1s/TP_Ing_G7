/*FUNCION CREAR MAPA*/
var mapCreation = function(nodeId) {
	var ungsLocation = [-34.5221554, -58.7000067];
  	var miubicacion =  [-34.463100, -58.737968];
  	var map = L.map('mapid').setView(miubicacion,13);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  return map;
}