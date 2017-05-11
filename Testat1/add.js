function validateForm() {
    
    var vorname = document.getElementById("vorname").value;
    var name = document.getElementById("name").value;
    var verein = document.getElementById("verein").value;
    var hcoach = document.getElementById("hcoach").value;
    var acoach = document.getElementById("acoach").value;

    if(!vorname.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("vornameNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
    }else{
        document.getElementById("vornameNotification").innerHTML = "";
    }
    
    if(!name.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("nameNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
    }else{
        document.getElementById("nameNotification").innerHTML = "";
    }
    
    if(!verein.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("vereinNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
    }else{
        document.getElementById("vereinNotification").innerHTML = "";
    }
    
    if(!hcoach.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("hcoachNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
    }else{
        document.getElementById("hcoachNotification").innerHTML = "";
    }
    
    if(!acoach.match(/^[a-zA-zöaüßÖÄÜ]+$/)){
        document.getElementById("acoachNotification").innerHTML = "Bitte &uumlberpr&uumlfe diese Eingabe.";
    }else{
        document.getElementById("acoachNotification").innerHTML = "";
    }

}