//validates the input fields
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
        document.getElementById("vornameNotification").innerHTML = "Incorrect input.";
        check=false;
    }else{
        document.getElementById("vornameNotification").innerHTML = "";
    }

    if(!name.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("nameNotification").innerHTML = "Incorrect input.";
        check=false;
    }else{
        document.getElementById("nameNotification").innerHTML = "";
    }

    if(!verein.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("vereinNotification").innerHTML = "Incorrect input.";
        check=false;
    }else{
        document.getElementById("vereinNotification").innerHTML = "";
    }

    if(!hcoach.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("hcoachNotification").innerHTML = "Incorrect input.";
        check=false;
    }else{
        document.getElementById("hcoachNotification").innerHTML = "";
    }

    if(!acoach.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("acoachNotification").innerHTML = "Incorrect input.";
        check=false;
    }else{
        document.getElementById("acoachNotification").innerHTML = "";
    }

    if(nummer<4||nummer>15){
        document.getElementById("numberNotification").innerHTML = "Incorrect input.";
        check=false;
    }else{
        document.getElementById("numberNotification").innerHTML = "";
    }

    if(geburtsjahr<=0||geburtsjahr>=2015){
        document.getElementById("yearNotification").innerHTML = "Incorrect input.";
        check=false;
    }else{
        document.getElementById("yearNotification").innerHTML = "";
    }

    if(check==true){
        sendData();
        alert("Information send.")
    }else{
        alert("Some entries are wrong. Please check your input.");
    }
}

//sends Data to the Server
function sendData() {

    var formData = new FormData();
    var inputs = document.getElementsByTagName('input');
    var select = document.getElementsByTagName('select')[0];

    for (var i = 0; i < inputs.length; i++) {
        formData.append(inputs[i].name,inputs[i].value);
    }
        formData.append('position', select.options[select.selectedIndex].value);

    var xhr = new XMLHttpRequest();

// lokaler Aufruf -> Server
    xhr.open('POST', '../api/players', true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onload = function (e) {

    };

    xhr.send(formData);

}