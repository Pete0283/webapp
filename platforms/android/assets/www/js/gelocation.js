var context;
var canvas;
var holder;

document.addEventListener("DOMContentLoaded", function(){
    
    holder = document.getElementById("two");
    
    if ( navigator.geolocation ) {
            var params = { enableHighAccuracy: false, timeout: 50000, maximumAge: 65000};
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError, params);
        
    canvas = document.createElement('canvas');
        canvas.height = 300;
        canvas.width = 300;
        holder.appendChild(canvas);
    
    }else{
    
    alert("Uh oh, looks like your device does not support location services. Too bad!")
    }
});

function onSuccess( position ) {
   
    var output = document.createElement('div');
    var outputText = document.createElement('p');
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    outputText.innerHTML += "Latitiude: " + position.coords.latitude + "&deg;<br/>" + "Longitude: " + position.coords.longitude + "&deg;<br/>"; 
    
    holder.appendChild(output);
    output.appendChild(outputText);
    
    var map = document.createElement('img');
        map.onload = function() {
            
            context = canvas.getContext('2d');
            context.drawImage(map, 0, 0);
        }
            map.src = 'https://maps.googleapis.com/maps/api/staticmap?center='
            + latitude + ',' + longitude +'&zoom=14&size=300x300' +'&markers=color:red' +'|' + latitude + ',' + longitude;
        };

function onError(error) {
    var errors = {
        1: 'Permission denied', 2: 'Position unavailable', 3: 'Request timeout'}
    };