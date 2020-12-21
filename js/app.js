function onDocumentReady() {
	// codigo a ejecutar cuando se cargue el document HTML

			var centro = [41.82045, 1.54907]
			var crs25831 = new L.Proj.CRS("EPSG:25831","+proj=utm +zone=31 +elips=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_def",
			{
				resolutions: [1100, 550, 275, 100, 50, 25, 10, 5, 2, 1, 0.5, 0.25]
		});

			var mapa = L.map("mapid").setView([41.5,2],12);
			var osm = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","OpenStreetMap");
			mapa.addLayer(osm);
			//L.geoJSON(gasolineras).bindPopup(function (layer) {
				//return layer.feature.properties.Nombre;
			//}).addTo(mapa);
			
			
			
			var Iconbus = L.icon({
				iconUrl: 'images/bus.png',
				iconSize: [25, 25],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			var bus = L.geoJSON(SB1,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconbus
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.nombre;
			})
			bus.addTo(mapa);
			mapa.fitBounds(bus.getBounds());
			
			
			
			
			
			var Iconbus2 = L.icon({
				iconUrl: 'images/bus2.png',
				iconSize: [25, 25],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			var paradabus2 = L.geoJSON(SB2,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconbus2
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Nombre;
			})
			paradabus2.addTo(mapa);
			
			
			
			
			
			var Iconbus3 = L.icon({
				iconUrl: 'images/bus3.png',
				iconSize: [25, 25],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			var paradabus3 = L.geoJSON(SB3,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconbus3
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Nombre;
			})
			paradabus3.addTo(mapa);
			
			
			
			
			
			
			var Iconaparcaments = L.icon({
				iconUrl: 'images/parking.png',
				iconSize: [30, 30],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			
			var aparcamentslayer = L.geoJSON(aparcaments2,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconaparcaments
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.nom;
			})
			aparcamentslayer.addTo(mapa);
			
			
			
			
			
			var Iconabancs = L.icon({
				iconUrl: 'images/bank.png',
				iconSize: [30, 30],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
				
			
			var bancslayer = L.geoJSON(bancsfinalgjon,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconabancs
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Entitat;
			})
			bancslayer.addTo(mapa);
			
			
			
			
			var Iconabarsrest = L.icon({
				iconUrl: 'images/bars_restaurants.png',
				iconSize: [26, 26],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			var barsrestlayer = L.geoJSON(bars_restaurants,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconabarsrest
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.bars_restaurants;
			})
			barsrestlayer.addTo(mapa);
			
			
			
			
			var Iconabiblios = L.icon({
				iconUrl: 'images/library.png',
				iconSize: [30, 30],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			var biblioslayer = L.geoJSON(bibliotecas,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconabiblios
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Nombre;
			})
			biblioslayer.addTo(mapa);
			
			
			
			
			
			var Iconaoficials = L.icon({
				iconUrl: 'images/government.png',
				iconSize: [30, 30],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			var oficialslayer = L.geoJSON(Edificis_Oficials_Ajuntaments,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconaoficials
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Field1;
			})
			oficialslayer.addTo(mapa);
			
			
			
			
			
			
			var Iconaesportiu = L.icon({
				iconUrl: 'images/equipaments_esportius.png',
				iconSize: [30, 30],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			var esportiulayer = L.geoJSON(Equipamientos_esportius_altres,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconaesportiu
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Equipamientos_esportius_altres;
			})
			esportiulayer.addTo(mapa);
			
			
			
			
			
			
			var Iconaeducatius = L.icon({
				iconUrl: 'images/eq_educatius.png',
				iconSize: [30, 30],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			
			var educatiuslayer = L.geoJSON(equipaments_educatius,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconaeducatius
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.equipaments_educatius;
			})
			educatiuslayer.addTo(mapa);
			
			
			
			
			
			
			
			
			var Iconaferrocarril = L.icon({
				iconUrl: 'images/ferrocarril.png',
				iconSize: [30, 30],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			
			var ferrocarrillayer = L.geoJSON(estaciones,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconaferrocarril
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Nombre;
			})
			ferrocarrillayer.addTo(mapa);
			
			
			
			
			
			var Iconafarmacia = L.icon({
				iconUrl: 'images/farmacies.png',
				iconSize: [25, 25],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			var farmacialayer = L.geoJSON(Farmacia,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconafarmacia
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.NOM_FAR;
			})
			farmacialayer.addTo(mapa);
			
			
			
			
			
			
			var Iconasanitaris = L.icon({
				iconUrl: 'images/equipaments_sanitaris.png',
				iconSize: [27, 27],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			var sanitarislayer = L.geoJSON(Hospitals_CAPs,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconasanitaris
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Sanitari;
			})
			sanitarislayer.addTo(mapa);
			
			
			
			
			
			var Iconabenzina = L.icon({
				iconUrl: 'images/benzineres.png',
				iconSize: [27, 27],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			var benzinalayer = L.geoJSON(gasolineras,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconabenzina
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Gasolinera;
			})
			benzinalayer.addTo(mapa);
			
			
			
			
			
			var Iconasupers = L.icon({
				iconUrl: 'images/supermercats.png',
				iconSize: [27, 27],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			var superslayer = L.geoJSON(Supermercados,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconasupers
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Cadena;
			})
			superslayer.addTo(mapa);
			
			
			
			
			
			
			
			var Iconapoli = L.icon({
				iconUrl: 'images/comissaries.png',
				iconSize: [27, 27],
				iconAnchor: [22, 94],
				popupAnchor: [-10, -95]
			});
			
			
			
			var polilayer = L.geoJSON(policia2,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconapoli
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.Tipo;
			})
			polilayer.addTo(mapa);
			
			
			
			
			
			
			
			var Iconaportal = L.icon({
				iconUrl: 'images/circle.png',
				iconSize: [0, 0],
				iconAnchor: [0, 0],
				//popupAnchor: [-10, -95]
			});
			
			
			
			var portals = L.geoJSON(portales,{
				pointToLayer: function(feature, latlng) {
					return L.marker(latlng, {
						icon: Iconaportal
						});
					}
				}
			).bindPopup(function (layer) {
				return layer.feature.properties.direccion;
			})
			portals.addTo(mapa);
			
			
			
			
			
			
			
			
			
			
			
			
			var overlays = [
								{
									groupName : "Transport",
									expanded  : true,
									layers    : { 
										"Benzineres" : benzinalayer,
										"Aparcaments" 	 : aparcamentslayer,
										"Estacions de ferrocarril" 	 : ferrocarrillayer,
										"Bus Línia 1" 	 : bus,
										"Bus Línia 2" 	 : paradabus2,
										"Bus Línia 3" 	 : paradabus3
									}	
								}, {
									groupName : "Salut",
									expanded  : true,
									layers    : { 
										"Farmàcies"     : farmacialayer,
										"Equipaments sanitaris" 	 : sanitarislayer
											
									}	
								}, {
									groupName : "Educacio",
									expanded  : true,
									layers    : { 
										"Biblioteques"     : biblioslayer,
										"Equipaments esportius" 	 : esportiulayer,
										"Equipaments educatius" 	 : educatiuslayer
									}
								}, {
									groupName : "Altres",
									expanded  : true,
									layers    : { 
										"Bars i restaurants"     : barsrestlayer,
										"Entitats bancàries" 	 : bancslayer,
										"Comissaries" 	 : polilayer,
										"Supermercats" 	 : superslayer,
										"Edificis oficials" 	 : oficialslayer
									}
								}
							
					];		
						
					
					
					
			
			
			var options = {
				container_width 	: "300px",
				container_maxHeight : "350px", 
				group_maxHeight     : "80px",
				exclusive       	: false
			};
			
			
			var control = L.Control.styledLayerControl(overlays);
			mapa.addControl(control);
			
			control.addOverlay( benzinalayer, "Benzineres", {groupName : "Transport"} );
			control.addOverlay( aparcamentslayer, "Aparcaments", {groupName : "Transport"} );
			control.addOverlay( ferrocarrillayer, "Estacions de ferrocarril", {groupName : "Transport"} );
			control.addOverlay( bus, "Bus Línia 1", {groupName : "Transport"} );
			control.addOverlay( paradabus2, "Bus Línia 2", {groupName : "Transport"} );
			control.addOverlay( paradabus3, "Bus Línia 3", {groupName : "Transport"} );
			control.addOverlay( farmacialayer, "Farmàcies", {groupName : "Salut"} );
			control.addOverlay( sanitarislayer, "Equipaments sanitaris", {groupName : "Salut"} );
			control.addOverlay( biblioslayer, "Biblioteques", {groupName : "Educacio"} );
			control.addOverlay( esportiulayer, "Equipaments esportius", {groupName : "Educacio"} );
			control.addOverlay( educatiuslayer, "Equipaments educatius", {groupName : "Educacio"} );
			control.addOverlay( barsrestlayer, "Bars i restaurants", {groupName : "Altres"} );
			control.addOverlay( bancslayer, "Entitats bancàries", {groupName : "Altres"} );
			control.addOverlay( polilayer, "Comissaries", {groupName : "Altres"} );
			control.addOverlay( superslayer, "Supermercats", {groupName : "Altres"} );
			control.addOverlay( oficialslayer, "Edificis oficials", {groupName : "Altres"} );
			
			
			
			
			
			
			
			var searchControl = new L.Control.Search({
					layer: portals, //nombre de la capa geojson
					propertyName: 'direccion', // campo donde buscar los valores del geojson
					moveToLocation: function(latlng, title, map) {
					mapa.setView(latlng, 18); // nivel de zoom cuando encuentre seleccion
					}
				});
				mapa.addControl(searchControl);
				mapa.removeLayer(portals);
				
			var incidencias = L.tileLayer.wms("http://158.109.128.158/geoserver/sigmun/wms?", {
				layers: 'incidencias',
				format: 'image/png',
				transparent:true,
				continuousWorld: true
				});

							
			
			setTimeout(function(){
			mapa.invalidateSize();
			mapa.setView([41.345, 2.03], 14);},1000);

}

function onDeviceReady() {
	// codigo a ejecutar cuando el dispositivo este listo

}

function getCurrentPosition() {
	var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
		$('#flat').val(position.coords.latitude);
		$('#flon').val(position.coords.longitude);
    };
	function onError(error) {
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	}
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function saveMarker() { 
	var name =$('#fname').val(); 
	var desc =$('#fdesc').val(); 
	var lat =$('#flat').val(); 
	var lon =$('#flon').val(); 
	$.ajax({
		type: 'POST',
		url: 'http://158.109.128.158/projecte/incidencia.php',
		data: 'x='+lon + '&y='+lat+ '&descripcion='+desc+'&nombre='+name+ '&foto='+nombre,
		success: function(){
			location.href = "lista.html"; // o list.html según tengaís
		}
	});
}


function initMap() {
	var marker_string = localStorage.getItem('marker.json');
	var marker_obj = JSON.parse(marker_string);
		if (marker_obj != null){
		L.marker([marker_obj.lat,
		marker_obj.lng]).addTo(mymap).bindPopup("<b>" + marker_obj.name +
		"</b><br />" + marker_obj.desc ).openPopup();
	}

}

function onMapClick(e) {
				popup
					.setLatLng(e.latlng)
					.setContent("You clicked the map at " + e.latlng.toString())
					.openOn(mymap);
				}

function recuperar_datos_locales() {
	return JSON.parse(localStorage.getItem('pueblos-user.json'));
}

function guardar_datos_locales(nuevo_pueblo) {
	
	// recuperamos los datos guardados localmente	 
	var pueblos = recuperar_datos_locales();
	
	
	
	// si no habian datos, inicializamos la variable	
	if (!pueblos) {
		pueblos = [];
	}

	// anadimos el nuevo pueblo	
	pueblos.push(nuevo_pueblo);

	

	// guardamos la lista de pueblos modificada	
	localStorage.setItem('pueblos-user.json', JSON.stringify(pueblos));
}
				
function obtener_marcadores_pueblos() {
	var pueblos_predefinidos = town_data;
	mostrar_marcadores_pueblos(pueblos_predefinidos);
	
	var pueblos_locales = recuperar_datos_locales(); 
	mostrar_marcadores_pueblos(pueblos_locales, 'green_icon');
}

function mostrar_marcadores_pueblos(pueblos, icon) {
	
	var greenIcon = new L.Icon({
		iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
	  	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	  	iconSize: [25, 41],
	  	iconAnchor: [12, 41],
	  	popupAnchor: [1, -34],
	  	shadowSize: [41, 41]
	});
	
	if (!pueblos) {
		return;
	}

	
	for (var i=0; i<pueblos.length; i++) {

		
		var pueblo = pueblos[i];
		
		var popup_html = '';
		popup_html += '<b>' + pueblo.name + '</b><br>';
		
		if (pueblo.desc) {
			popup_html += '<br>' + pueblo.desc + '<br>';
		}
		
		
		if (pueblo.image) {
			popup_html += '<br><img src=' + pueblo.image + ' width="150"><br>';
		}else if (pueblo.id) {
			popup_html += '<br><img src="images/pueblos/' + pueblo.id + '.jpg" width="150"><br>';
		}
		popup_html += '(' + pueblo.latitude + ', ' + pueblo.longitude + ')';
		
		
		
		if (icon == 'green_icon') {
			
			L.marker([pueblo.latitude, pueblo.longitude], {icon: greenIcon}).addTo(mymap)
				.bindPopup(popup_html);
				
		} else {
			
			L.marker([pueblo.latitude, pueblo.longitude]).addTo(mymap)
				.bindPopup(popup_html);
				
		}

			
	}
}

function obtener_lista_pueblos() {
	
	var pueblos_predefinidos = town_data;
	mostrar_lista_pueblos(pueblos_predefinidos);
	
	var pueblos_locales = recuperar_datos_locales(); 
	mostrar_lista_pueblos(pueblos_locales);
	
}

function mostrar_lista_pueblos(pueblos) {
	
	if (!pueblos) {
		return;
	}
	
	var list_obj = $('#town_list');
	
	for (var i=0; i<pueblos.length; i++) {
		
		var pueblo = pueblos[i];
		
		var row_html = '';
		row_html += '<li>';
		if (pueblo.image) {
			row_html += '<img src="' + pueblo.image + '" style="width: 5em; background-color: red">';
			row_html += '  <h2>' + pueblo.name + '</h2>';
			row_html += '  <p>(' + pueblo.latitude + ', ' + pueblo.longitude + ')</p>';
			row_html += '</li>';
		/*} else if (pueblo.id) {
			row_html += '<img src="images/pueblos/' + pueblo.id + '.jpg"  style="width: 5em; background-color: red">';*/
		} else {
			row_html += '<img src="images/pueblos/' + pueblo.id + '.jpg"  >';
			row_html += '  <h2>' + pueblo.id + '. ' + pueblo.name + '</h2>';
			row_html += '  <p>(' + pueblo.latitude + ', ' + pueblo.longitude + ')</p>';
			row_html += '</li>';
		}
			
		list_obj.append(row_html);
		list_obj.listview("refresh");
		
	}
}


function getCameraPicture() {
	var onSuccess = function(imageData) {
		var image = $('#fimg');
		image.attr('src', imageData);
		nombre = imageData.substr(imageData.lastIndexOf('/')+1);
		var opciones = new FileUploadOptions();
			opciones.fileKey="file";
			opciones.fileName=nombre;
			opciones.mimeType="image/jpeg";
			opciones.chunkedMode= false;
			var ft = new FileTransfer();
			ft.upload(imageData,"http://158.109.128.158/projecte/upload.php", null, null, opciones);
	};
	function onError(error) {
		alert("No se ha podido acceder a la camara:" + error);
	}
	var cameraOptions = {
		sourceType: Camera.PictureSourceType.CAMERA,
		destinationType: Camera.DestinationType.FILE_URI,
		targetWidth: 300,
		targetHeight: 300
	};
	navigator.camera.getPicture(onSuccess, onError, cameraOptions);
}

function refresh() {
	window.location.reload(true);
}

function getIncidencias(){
	var list_obj = $('#town_list');
	$.ajax({
		type: 'POST',
		url: 'http://158.109.128.158/projecte/llista.php',
		success: function (data) {
		for (var i=0; i<data.length; i++) {
		var row_html = '';
		row_html += '<li>';
		row_html += '<img src="http://158.109.128.158/projecte/images/' +
		data[i].foto +'" style="width: 5em; background-color: red">';
		row_html += ' <h2>' + data[i].nombre + '</h2>';
		row_html += ' <p>(' + data[i].descripcio + ')</p>';
		row_html += '</li>';
		list_obj.append(row_html);
	}
	list_obj.listview("refresh");
	}});
}