 var socket = io.connect('http://localhost:3000');
 

 // elemetons del Dom
var borrar =  document.getElementById('borrar');
var ouput = document.getElementById('output');
var message = document.getElementById('message');
var send = document.getElementById('btnSend');
var feedback = document.getElementById('feedback');
var current_user = document.getElementById('user').textContent; 

 // añadir evento al btn send 
   send.addEventListener('click', function(){
       if(message.value != null && message.value != ""){
        socket.emit('chat', {
                message: message.value,
                user : current_user
            }); 
            CleanMessage(message);  
       }
        
  });

message.addEventListener('keypress', function(event){
   if(event.keyCode == 13){
    if(message.value != null && message.value != ""){
        socket.emit('chat', {
                message: message.value,
                user : current_user
            }); 
            CleanMessage(message); 
         
       }
        
   }
 
});



message.addEventListener('change', function(){
    socket.emit('typing', { user : current_user} );
});



 // escuchar al servidor 
 
 socket.on('chat', function(data){
     if(current_user == data.user.toString()){
        output.innerHTML += '<p id="currenMessage"><strong>'+ data.user +'</strong>: '+ data.message + '</p><br/>'; 
        feedback.innerHTML = "";     
    } else {  

    output.innerHTML += '<p><strong style=color:>'+ data.user +'</strong>: '+ data.message + '</p><br/>'; 
    feedback.innerHTML = "";

       }
});

 

socket.on('typing', function(data){
    feedback.innerHTML = '<p> <span style="color:#008AC9;">' + data.user +  '</span> esta escribiendo...</p>'; 
});


borrar.addEventListener('click', function(){
    CleanMessage(message);
});
 

// limpiar el la caja de mensaje

function CleanMessage(input){
     input.value = ""; 
}