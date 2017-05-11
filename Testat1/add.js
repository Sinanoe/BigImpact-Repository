function validateForm() {
    var vorname = document.getElementById("vorname").value;
    var name = document.getElementById("name").value;
    var verein = document.getElementById("verein").value;
    var hcoach = document.getElementById("hcoach").value;
    var acoach = document.getElementById("acoach").value;
    
    var alphabet[] = "abcdefghijklmnopqrstuvwxyz".toCharArray();
    var[] alphabetG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
    
    for(int i=0; i< =vorname.length; i++){
        var zeichen = vorname.charAt(i);
        var alpha = alphabet[i];
        var alphaG = alphabetG[i];
        
        if(!(zeichen == alpha) ||!(zeichen == alphaG){
            alert("Felder dürfen keine Sonderzeichen enthalten.")
            return false;
        }else{
            return true;
        }
                                           }
    if (vorname == "" || name == "" || verein == "" || hcoach ="" || acoach== "") {
        alert("Felder dürfen nicht leer sein.");
        return false;
    }


}

function alert(var txt){
    document.getElementById("notification").innerHTML = txt;
}