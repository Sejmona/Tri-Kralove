/*let main = document.querySelector('#mapa');
/*var stred = SMap.Coords.fromWGS84(14.41, 50.08);
var mapa = new SMap(JAK.gel('mapa'), stred, 10);
mapa.addDefaultLayer(SMap.DEF_BASE).enable();
mapa.addDefaultControls();
var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();*/

var center = SMap.Coords.fromWGS84(14.3960244, 50.0951161);
var m = new SMap(JAK.gel('m'), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

var card = new SMap.Card();
card.getHeader().innerHTML = '<strong>Tři králové, hrdinové odboje</strong>';
card.getBody().innerHTML = 'Pomník Václava Morávka</em>!';

var options = {
  title: 'Dobré ráno',
};
var marker = new SMap.Marker(center, 'myMarker', options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);
