import 'sdleafletdraw/dist/leaflet.draw.css';
import './style.css'
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'sdleafletdraw';

const map = new L.Map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
}).addTo(map);

const editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

const drawControl = new L.Control.Draw({
    draw: {
        polyline: false,
        circle: false,
        marker: false,
        rectangle: {
            color: 'red',
            fillOpacity: 0.1,
            opacity: 1,
            weight: 4,
        },
        polygon: {
            color: 'blue',
            fillOpacity: 0.1,
            opacity: 0.8,
            weight: 2.5,
        },
    },
    position: 'topleft',
    allowIntersection: false,
    edit: {
        featureGroup: editableLayers,  // A leaflet featureGroup
    }
});
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, (event) => {
  console.log('event:', event);
  const { layerType, layer } = event;

  if (layerType === 'marker')
      layer.bindPopup('A popup!');

  editableLayers.addLayer(layer);
});

// map.on('draw:drawstart', () => {
//   console.log('drawstart');
// })
//
// map.on('draw:drawstop', () => {
//   console.log('drawstop');
// })

map.on('click', () => {
  console.log('map click');
})

map.on('mouseup', () => {
  console.log('map mouseup');
})
