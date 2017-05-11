function validateForm() {
    
    var vorname = document.getElementById("vorname").value;
    var name = document.getElementById("name").value;
    var verein = document.getElementById("verein").value;
    var hcoach = document.getElementById("hcoach").value;
    var acoach = document.getElementById("acoach").value;
    var check = true;

    if(!vorname.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("vornameNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
        check=false;
    }else{
        document.getElementById("vornameNotification").innerHTML = "";
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
    }
}

function sendData() {

    var formData = new FormData();
    var inputs = document.getElementsByTagName('input');
    var select = document.getElementsByTagName('select')[0];
   
    for (var i = 0; i < inputs.length; i++) {
            console.log(inputs[i]);  
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