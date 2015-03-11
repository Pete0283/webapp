var Message;
var holder;

document.addEventListener("deviceready", function() {
    
        var options = new ContactFindOptions( );
        options.filter = ""; 
        options.multiple = true;
        var filter = ['displayName'];
        navigator.contacts.find(filter, successFunc, errFunc, options);
        

        function successFunc(contacts){
 
            var r = Math.floor((Math.random() * contacts.length - 1));
    
    holder = document.getElementById('holder');
    Message = document.getElementById('Message');
    
                for(var i=0; i<contacts.length; i++){
                    Message.innerHTML = contacts[r].displayName;
                    holder.appendChild(Message);
                }
}
        
        function errFunc(contactError) {
            alert('Error: ' + contactError);
        }
        false;}


