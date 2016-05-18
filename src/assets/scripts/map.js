/**
 * Google maps JavaScript API
 * https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyleFeatureType
 *
 */
var initMap = function() {

  /**
   * State IDs of Google Fusion Tables
   * https://support.google.com/fusiontables/answer/1182141
   *
   */
  var state_id = {
    oh: '1Hky8qXEOcJQmTbndHmrHWo8-yhRBLV3U31HwEg',
    ny: '1uel5gE4TfUpdxb-EIH0Pqn5RZJOZo81Ltf-DXA',
    pa: '1uel5gE4TfUpdxb-EIH0Pqn5RZJOZo81Ltf-DXA',
  };

  /* Location details */
  var title = 'Pizza Hut';
  var street = '311 Lincolnway East';
  var city = 'Minerva';
  var state = 'Ohio';
  var zip = '44657';
  var directions = 'https://goo.gl/maps/EdUSZB1gqwu';

  /* County variable must be wrapped in single quotes if it has space or dash */
  var county = "'OH-Stark'";

  /* Styles for county polygon container */
  var fill_color = '#000000';
  var fill_opacity = 0.1;

  /**
   * {location.info} Message displayed in tooltip above marker
   * {location.address} A string address that gets converted into geographic coordinates
   *
   */
  var location = {
    info: '<strong>' + title + '</strong><br>\
            ' + street + '<br>' + city + ', ' + state + ' ' + zip + '<br><a href="\
            ' + directions + '" target="_blank">Get Directions</a>',
    address: street + ', ' + city + ', ' + state + ' ' + zip
  };

  /* Default map options */
  var map_options = {
    zoom: 15,
    disableDefaultUI: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  /* Default map styles */
  var map_styles = [
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        { color: "#FAFAFA" }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" },
        { color: "#757575" }
      ]
    }
  ];

  var map = new google.maps.Map(document.getElementById('map-wrapper'), map_options);
  var styled_map = new google.maps.StyledMapType(map_styles, {name: 'Styled Map'});

  /**
   * Geocoding is the process of converting addresses into geographic coordinates
   * https://developers.google.com/maps/documentation/javascript/geocoding
   *
   */
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': location.address }, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {

      map.setCenter(results[0].geometry.location);

      var info_window = new google.maps.InfoWindow({});
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          draggable: false,
          animation: google.maps.Animation.DROP
      });

      info_window.setContent(location.info);
      info_window.open(map, marker);

      // On click, bounce the map marker
      marker.addListener('click', function() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      });

    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });

  // The outlined county or counties and their styles
  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: "geometry",
      from: state_id.oh,
      where: "'State-County' = " + county
    },
    styles: [
      {
        polygonOptions: {
          fillColor: fill_color,
          fillOpacity: fill_opacity
        }
      }
    ]
  });

  /* Call the map styles and add county layer(s) to map */
  map.mapTypes.set('map_style', styled_map);
  map.setMapTypeId('map_style');
  layer.setMap(map);

};
