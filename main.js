Plotly.d3.csv(
	"https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv",
	function(err, rows) {
		function unpack(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
		}

var data = [
	{
		type: "scattermapbox",
		text: unpack(rows, "Globvalue"),
		lon: unpack(rows, "Lon"),
		lat: unpack(rows, "Lat"),
		marker: { color: "fuchsia", size: 4 }
	}
];

var layout = {
	dragmode: "zoom",
	mapbox: {
		style: "white-bg",
		layers: [
			{
				sourcetype: "raster",
				source: ["https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"],
				below: "traces"
			}
		],
		center: { lat: 38, lon: -90 },
		zoom: 3
	},
	margin: { r: 0, t: 0, b: 0, l: 0 }
};

Plotly.newPlot('myDiv', data, layout);
	}
);
