// 7. amap
function aMap() {
	if ($('.amap').length) {
		$('.amap').each(function() {
			// getting options from html
			var Self = $(this);
			var mapName = Self.attr('id');
			var axis = Self.data('map-axis');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');
			var markers = Self.data('markers');

			var styles = [{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#444444"
					}]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [{
						"color": "#f2f2f2"
					}]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [{
						"visibility": "simplified"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [{
							"color": "#d3d3d3"
						},
						{
							"visibility": "on"
						}
					]
				}
			];


			// if zoom not defined the zoom value will be 15;
			if (mapZoom) {
				var mapZoom = 14;
			};
			if (!isArrLen2(axis)) {
				axis = [116.397428, 39.90923]
			}
			// init map
			var map;
			map = new AMap.Map(mapName, {
				zoom: mapZoom,
				center: axis,
				viewMode: '2D',
				// div: '#'+mapName,
				// scrollwheel: false,
				// styles: styles,
				// lat: mapLat,
				// lng: mapLng,
			});
			console.log(iconPath);
			// 添加工具条
			map.plugin(["AMap.ToolBar"], function() {
				map.addControl(new AMap.ToolBar());
			});
			var marker = new AMap.Marker({
				position: axis, //位置
				title: mapTitle || '',
				icon: iconPath ? new AMap.Icon({
					image: iconPath,
					size: new AMap.Size(52, 52), //图标大小
					imageSize: new AMap.Size(26, 26)
				}) : null
			})
			marker.setMap(map)
			marker.setLabel({
				offset: new AMap.Pixel(12, 0), //设置文本标注偏移量
				content: "<div class='info'>" + mapTitle + "</div>", //设置文本标注内容
				direction: 'right' //设置文本标注方位
			});
			map.add(marker)
			var text = new AMap.Text({
				position: axis, //位置
				title: mapTitle || '',
				anchor: 'center', // 设置文本标记锚点
				draggable: true,
				cursor: 'pointer',
				angle: 10,
				style: {
					'padding': '.75rem 1.25rem',
					'margin-bottom': '1rem',
					'border-radius': '.25rem',
					'background-color': 'white',
					'width': '15rem',
					'border-width': 0,
					'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
					'text-align': 'center',
					'font-size': '20px',
					'color': 'blue'
				},
			})
			text.setMap(map)
			// if icon path setted then show marker
			/*
			if (iconPath) {
				$.each(markers, function(index, value) {
					var index = value;
					var html;
					if (index[2]) {
						html = index[2];
					};
					if (!index[3]) {
						index[3] = iconPath;
					};

					map.addMarker({
						icon: index[3],
						lat: index[0],
						lng: index[1],
						infoWindow: {
							content: html
						}
					});

				});
			}
			*/
		});
	};
}

/**
 * 是否是这样的数组&length = 2
 * @param {*} value 
 */
function isArrLen2(value) {
	if (value && typeof value === 'object' && value.length === 2) return true
	else return false
}

// Instance of fuction while Document ready event	
jQuery(document).ready(function() {
	(function($) {
		aMap();


	})(jQuery);
});
