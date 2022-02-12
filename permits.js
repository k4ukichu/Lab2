var url="(https://data.calgary.ca/resource/c2es-76ed.geojson)";
function retrieve_url(url)
{
    var url_req =new XMLHttpRequest();
    url_req.open("GET",url,false);
    url_req.send(null);
    return url_req.responseText;
}


var mymap = L.map('map').setView([51.047, -114.0687], 13);
vargeojsonLayer=L.geoJSON.addto(mymap)
var starting
var ending
var layer= L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={'pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6aGo3dXRqMmF0YzJwa3VodzR0a3kwbSJ9.Z1S0wC7NsMyDhqO4IvHhrg'}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

const marker=L.marker([51.047, -114.0687]).addTo(mymap);

jQuery(function()  
{
    jQuery('input[name="dates]').daterangepicker(
        {opens:'left'},
         function(start,end,label){
            console.log("A date has been entered"+ start.format('YYYY-MM-DD')+'to'+end.format(YYYY-MM-DD));
            starting=start,format('YYYY-MM-DD')
            ending= end.format('YYYY-MM-DD')
             
            var parameters="?$where=issuedate>" + "'"+starting+"'"+"and isssuedate <" +"'"+ending+"'";
            console.log(parameters);
            var geoJSON_endpoint="https://data.calgary.ca/resource/c2es-76ed.geojson" + parameters;
            var geojson_objects =JSON.parse(get_data_from_url(geojson_endpoint));
            console.log(geosjon_endpoint);
            console.log(geojson_objects);
            
            markers.clearLayers();
            geosonLayer=L.geojson(geoJson_objects,
                {
                    onEachFeature:function(features,layer)
                    {layer.bindPopup("<p> Date issued: <p>"+ features.properties.issuedate + "<br>" +"<p>Community Name:<p>" + features.properties.communityname +"<br>"
                    +"<p>work class group:<p>" + features.properties.workclass)}},

                  markers.addLayer(geojsonLayer);
                  featuregroup.addlayer(markers);
                  featuregroup.addto(map);

                });
            });
            
            function clear_layers ()
            bynap.removeLayer (geojsonLayer);
        
            $(function(){
            $('input[name="single_date"]').daterangepicker({
            Singledatepicker: true,
            showDropdowns: true,
            minyear:1901,
            maxyear: parseInt(moment().format('YYYY'), 10)
             },
              function(start, end,label)
              {
            start_day = start, format('YYYY-MM-DD')
            console.log("Single Date:”, start_day),
            
            const params = new URLSearchParams({issuedate: start_day,});
            var parameters = "?" + params +"T00:00:00.000";

            console.log(params.toString());
            console.log(parameters);

        var geojson_endpoint "https://data.calgary.ca/resource/c2es-76ed.geojson" + parameters;
    var geojson_object = JSON.parse(get_data_from_url(geoson_endpoint));
    console.log(geojson_endpoint);
    console.log(geojson_object);
    markers.clearLayers();
    geojsonLayer = L.geoason(geojson_object, {onEachFeature: function(feature, layer) 
        {layer.bindPopup("<p> Date issued: <p>"+ features.properties.issuedate + "<br>" +"<p>Community Name:<p>" + features.properties.communityname +"<br>"
                    +"<p>work class group:<p>" + features.properties.workclass)}},


                    markers.addLayer(geojsonLayer);
                    featuregroup.addlayer(markers);
                    featuregroup.addto(map);
    });
});
function cleaer_markers(){markers.clearLayers()};
  
