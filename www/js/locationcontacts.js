function handleTouch(ev) {
    ev.preventDefault();
    
    var touch = ev.changedTouches[0]; //1st obj
    var newEvent = document.createEvent("MouseEvent");
    newEvent.initMouseEvent("click", true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY);
    ev.currentTarget.dispatchEvent(newEvent);
}

function hats(eve) {
    eve.preventdefault();
    
    if (eve.currentTarget.id == "two") {
        
        if (navigator.geolocation) {
            var geolocationOptions = {
                enableHighAccuracy: true, timeout: 50000, maximumAge: 65000
            };
        navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, geolocationOptions);
            
            
        } else { 
            alert("Uh oh, looks like your device does not support location services. Too bad!")
        }
        
    } else if (eve.currentTarget.id == "three") { 
        
        var options = new ContactFindOptions( );
        options.filter = ""; //essencially means no filter on contacts; will return all
        options.multiple = true;
        var filter = ["displayName"];
        navigator.contacts.find(filter, successFunc, errFunc, options);
        
        function successFunc(matches){
            
            var random = matches[Math.floor(Math.random() * matches.length)];
            
            var z = "";
            z += "<h2>"+random.displayName+"</h2>";
            
            if(random.emails && random.emails.length) {
                z+= "Email: "+random.emails[0].value+"<br/>";
            }
            
            if(random.phoneNumbers && random.phoneNumbers.length) {
                z+= "Phone: "+random.phoneNumbers[0].value+"<br/>
            }
            
            if(random.photos && random.photos.length) {
                z+= "<p><img src='"+random.photos[0].value+"'></p>";
            }
            
            document.querySelector("#selectedContact").innerHTML=z;
            
        }
        
        function errFunc(contactError) {
            alert('Error: ' + contactError);
        }
    }
}

function detectTouchSupport() {
    msGesture = navigator && navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0 && MSGesture;
    var touchSupport = (("ontouchstart" in window) || msGesture || (window.DocumentTouch && document instanceof DocumentTouch));
    return touchSupport;
}

function geolocationError(error) {
    var errors = {
        1: 'Permission denied', 2: 'Position unavailable', 3: 'Request timeout'}};
    
function geolocationSuccess(position) {
    var google_tile = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitiude + "," + position.coords.longitude + "&zoom=14&size=450x450&markers=color:green|label:Y|" + position.coords.latitiude + ',' + position.coords.longitude;
    
    var canvas = documentcreateElement("canvas");
    var context = canvas.getContext("2d");
    
    
    var imageObj = new Image();
    imageObj.src = google_tile;
    
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0);
        
        if (document.querySelector('canvas')){
            canvas.width = canvas.width;
            pages[1].appendChild(canvas);
            
        }else{
            pages[1].appendChild(canvas);
        }
    }