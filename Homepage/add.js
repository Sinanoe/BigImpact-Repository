function validateForm() {
    
    var vorname = document.getElementById("vorname").value;
    var name = document.getElementById("name").value;
    var verein = document.getElementById("verein").value;
    var hcoach = document.getElementById("hcoach").value;
    var acoach = document.getElementById("acoach").value;
    var nummer = document.getElementById("number").value;
    var geburtsjahr = document.getElementById("jahr").value;
    
    
    var check = true;

    if(!vorname.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("vornameNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("vornameNotification").innerHTML = "";
    }
    
    if((nummer<=3)&&(nummer>=16)){
        document.getElementById("numberNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("numberNotification").innerHTML = "";
    }
    
    if(geburtsjahr<=0&&geburtsjahr>=2015){
        document.getElementById("yearNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("yearNotification").innerHTML = "";
    }
    
    if(!name.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("nameNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("nameNotification").innerHTML = "";
    }
    
    if(!verein.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("vereinNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("vereinNotification").innerHTML = "";
    }
    
    if(!hcoach.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("hcoachNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("hcoachNotification").innerHTML = "";
    }
    
    if(!acoach.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("acoachNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("acoachNotification").innerHTML = "";
    }
   
    if(check==true){
        sendData();
        alert("Information send.")
    }
}

function sendData() {

    var formData = new FormData();
    var inputs = document.getElementsByTagName('input');
    var select = document.getElementsByTagName('select')[0];
   
    for (var i = 0; i < inputs.length; i++) {
        formData.append(inputs[i].name,inputs[i].value);
    }
        formData.append('position', select.options[select.selectedIndex].value);
    

    
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'http://188.166.165.74:13337/api/players', true);
    //xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader('Content-Type','application/json');
    //xhr.setRequestHeader('Accept','*/*');
    xhr.onload = function (e) {
       
    };

    xhr.send(formData);

}

function receiveData(){
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'http://188.166.165.74:13337/api/players', true);
    xhr.responseType= 'json';
    xhr.onload = function(){
        var data = xhr.response;
    
        if(data != null){
            //TODO: Tabelle löschen
            
            //Tabelle erstellen
            createTable(data);
        }else{
            console.log(data);
        }
    }
    
    xhr.send(null);
   
}

function createTable(data){
    var myTable = document.createElement("table"); 
    var mytablebody = document.createElement("tbody");
    
    for(var i=0; i<=data.length; i++){
        mycurrent_row = document.createElement("tr");
        mytablebody.appendChild(mycurrent_row); 
    
    for(var j = 0; j <= 8; j++) { 
        mycurrent_cell = document.createElement("td");                
        currentname = document.createTextNode("Hallo" + data[j].name);
        currentverein = document.createTextNode("Hallo" + data[j].name);
        currentvorname = document.createTextNode("Hallo" + data[j].name);
        current = document.createTextNode("Hallo" + data[j].name);
        currenttext = document.createTextNode("Hallo" + data[j].name);
        currenttext = document.createTextNode("Hallo" + data[j].name);
        mycurrent_cell.appendChild(currenttext); 
        mycurrent_row.appendChild(mycurrent_cell); 
    }}

    myTable.appendChild(mytablebody); 
    document.getElementById('tabelle1').appendChild(myTable); 
}
