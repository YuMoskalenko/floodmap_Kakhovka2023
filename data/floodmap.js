// Ініціалізаія джерел тайлів
var EsriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    });

// Ініціалізаія мапи
var map = L.map('mapid', {
    center: [46.91, 32.40],
    zoom: 8,
    layers: [EsriWorldImagery]
});

var baseMaps = {
    "Esri.WorldImagery": EsriWorldImagery,
    "OpenStreetMap": OpenStreetMap
};

// Додавання меню перемикання шарів
L.control.layers(baseMaps).addTo(map);

// Додавання масштабної лінійки
L.control.scale({
  position: 'topright'
}).addTo(map);

// Завантаження контуру затопленої зони
$.getJSON("data/floodMax_WGS84.geojson", function(data) {
    L.geoJson(data).addTo(map);
});

