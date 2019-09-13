<template>
  <div id="map">

  </div>
</template>

<script>

import L from 'leaflet';
import 'sdleafletdraw';
// Include the css files
import 'sdleafletdraw/dist/leaflet.draw.css';

const map = new L.Map('mapid');
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
    const { layerType, layer } = event;

    if (layerType === 'marker')
        layer.bindPopup('A popup!');

    editableLayers.addLayer(layer);
});

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
