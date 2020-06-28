
var emojinContainer = document.getElementById('emojinContainer');
var message = document.getElementById('message');


// lista de emojins 

var emojins = ['128512', '128513', '128514', '128515', '128516', '128517',
 '128518', '128519', '128520', '128521', '128523', '128522', '128524', '128525', 
 '128526', '128527', '128528','128529','128530','128531','128532','128533',
 '128534', '128535', '128536','128537','128538','128539','128540','128541',
 '128542', '128543', '128544','128545','128546','128547','128548','128549',
 '128550', '128551', '128552','128553','128554','128555','128556','128557',
 '128558', '128559', '128560','128561','128562','128563','128564','128565',
 '128567', '128577', '129297','129296','128580','128579','128578','128566', 
 '129315', '129314', '129313','129312','129301','129300','129299','129298', 
 '129324', '129323', '129322','129321','129320','129319','129317','129316', 
 '129325', '129326', '129327','129488']; 


function EmojinList(){
    for(var i =0; i < emojins.length; i++){
        emojinContainer.innerHTML += '<span id="emojins" onclick="addEmojin(this)">&#'+ emojins[i] +'</span>';
    }
}   
EmojinList();
 
function showEmojins(){
   // emojinContainer.classList.add("animate__slideInRight"); 
    emojinContainer.classList.add("animate__fadeIn"); 
    emojinContainer.style.display = "block"; 
}

function CloseEmojins(elem){
    emojinContainer.classList.add("animate__backOutRight"); 
    emojinContainer.style.display = "none"; 

}


function addEmojin(elem){
       message.value += elem.textContent;
}
 
 