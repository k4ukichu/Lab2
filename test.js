const apiKey='pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig'
const map = L.map('map').setView([51.045057, -114.067853], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

geoJSONLayer=L.geojson(geojson_objects, {
    onEachFeature:function(features,layer){
       layer.bindPopup("<p> Date issued: <p>"+ features.properties.issuedate + "<br>" +"<p>Community Name:<p>" + features.properties.communityname +"<br>"
                       +"<p>work class group:<p>" + features.properties.workclass)}},
   
   markers.addLayer(geojsonLayer));
   featuregroup.addlayer(markers);
    featuregroup.addto(mymap);
   
        function clear_layers (){
        mymap.removeLayer (geojsonLayer);
        };
           
       $(function(){
       $('input[name="single_date"]').daterangepicker({
         Singledatepicker: true,
         showDropdowns: true,
         minyear:1901,
         maxyear: parseInt(moment().format('YYYY'), 10)
       },function(start, end,label) {
         start_day = start.format('YYYY-MM-DD')
        console.log("Single Date:", start_day);
   
       const params = new URLSearchParams({issuedate: start_day,});
       var parameters = "?" + params +"T00:00:00.000";
   
       console.log(params.toString());
       console.log(parameters);
   
        var geojson_endpoint="https://data.calgary.ca/resource/c2es-76ed.geojson?$where=issueddate >'"+starttime+"' and issueddate <'"+endtime+"'";
       var geojson_object = JSON.parse(get_data_from_url(geoson_endpoint));
       console.log(geojson_endpoint);
       console.log(geojson_object);
   
       markers.clearLayers();
   
       geojsonLayer = L.geojson(geojson_object, {onEachFeature: function(feature, layer) 
           {layer.bindPopup("<p> Date issued: <p>"+ features.properties.issuedate + "<br>" +"<p>Community Name:<p>" + features.properties.communityname +"<br>"
                       +"<p>work class group:<p>" + features.properties.workclassgroup)
           }});
   
   
           markers.addLayer(geojsonLayer);
           featuregroup.addlayer(markers);
           featuregroup.addto(mymap);
       });
   });
   function clear_markers(){markers.clearLayers();};
