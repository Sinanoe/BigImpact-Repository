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

    xhr.open('POST', '../api/players', true);
    //xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader('Content-Type','application/json');
    //xhr.setRequestHeader('Accept','*/*');
    xhr.onload = function (e) {

    };

    xhr.send(formData);

}

/*gets Data from the server
*gets JSON objects
*/
function receiveData(){

    var xhr = new XMLHttpRequest();

    xhr.open('GET', '../api/players', true);
    xhr.responseType= 'json';
    xhr.onload = function(){
        var data = xhr.response;

        if(data != null){
            createTable(data);
        }else{
            console.log(data);
        }
    }

    xhr.send(null);

}

function filterFavorites(){

    var xhr = new XMLHttpRequest();

    //xhr.open('GET', 'http://188.166.165.74:13337/api/players?favorites=true', true);
    xhr.open('GET', '../api/players?favorites=true', true);
    xhr.responseType= 'json';
    xhr.onload = function(){
        var data = xhr.response;

        if(data != null){
            createTable(data);
        }else{
            console.log(data);
        }
    }

    xhr.send(null);

}

function searchPlayers(){

    var xhr = new XMLHttpRequest();
    var char = document.getElementById('addr').value;

    if(char != null){
    //xhr.open('GET', 'http://188.166.165.74:13337/api/players?favorites=true', true);
    xhr.open('GET', '../api/players?search=' + char, true);
    xhr.responseType= 'json';
    xhr.onload = function(){
        var data = xhr.response;

        if(data != null){
            createTable(data);
        }else{
            console.log(data);
        }
    }

    xhr.send(null);
    }
}



function toggle(button){
  if(document.getElementById("123").value=="OFF"){
   document.getElementById("123").value="ON";
   filterFavorites();
   }else if(document.getElementById("123").value=="ON"){
    document.getElementById("123").value="OFF";
   receiveData();
   }

}

//table creation
function createTable(data){
    document.getElementById('tabelle1').innerHTML = "";

    var myTable = document.createElement("table");
    var mytablebody = document.createElement("tbody");
    mycurrent_throw = document.createElement("tr")

    var th1 = document.createElement("th");
    textname = document.createTextNode("Lastname");
    th1.appendChild(textname);

    var th2 = document.createElement("th");
    textvorname = document.createTextNode("Firstname");
    th2.appendChild(textvorname);

    var th3 = document.createElement("th");
    textclub = document.createTextNode("Club");
    th3.appendChild(textclub);

    var th4 = document.createElement("th");
    textcoach = document.createTextNode("Coach");
    th4.appendChild(textcoach);

    var th5 = document.createElement("th");
    textnumber = document.createTextNode("Number");
    th5.appendChild(textnumber);

    var th6 = document.createElement("th");
    textposition = document.createTextNode("Position");
    th6.appendChild(textposition);

    var th7 = document.createElement("th");
    textyear = document.createTextNode("Year");
    th7.appendChild(textyear);

    var th8 = document.createElement("th");
    textdelete = document.createTextNode("Delete");
    th8.appendChild(textdelete);

    mycurrent_throw.appendChild(th1);
    mycurrent_throw.appendChild(th2);
    mycurrent_throw.appendChild(th3);
    mycurrent_throw.appendChild(th4);
    mycurrent_throw.appendChild(th5);
    mycurrent_throw.appendChild(th6);
    mycurrent_throw.appendChild(th7);
    mycurrent_throw.appendChild(th8);

    mytablebody.appendChild(mycurrent_throw);

    for(var key in data){

        mycurrent_row = document.createElement("tr");
        mytablebody.appendChild(mycurrent_row);

        var mycurrent_cell1 = document.createElement("td");
        var mycurrent_cell2 = document.createElement("td");
        var mycurrent_cell3 = document.createElement("td");
        var mycurrent_cell4 = document.createElement("td");
        var mycurrent_cell5 = document.createElement("td");
        var mycurrent_cell6 = document.createElement("td");
        var mycurrent_cell7 = document.createElement("td");
        var mycurrent_cell8 = document.createElement("td");


        currentname = document.createTextNode("" + data[key].name);
        currentvorname = document.createTextNode("" + data[key].vorname);
        currentclub = document.createTextNode("" + data[key].club);
        currentcoach = document.createTextNode("" + data[key].coach);
        currentnummer = document.createTextNode("" + data[key].number);
        currentposition = document.createTextNode("" + data[key].position);
        currentjahr = document.createTextNode("" + data[key].year);
        currentdeletebutton = document.createElement("BUTTON");
        
        currentdeletebutton.setAttribute('id', "" + data[key]._id);
        
        currentdeletebutton.onclick = function() {
            
            var xhr1 = new XMLHttpRequest();

                xhr1.open('DELETE', '../api/players/' + currentdeletebutton.getAttribute('id') , true);
                xhr1.responseType= 'json';
                xhr1.onload = function(){
                var player = xhr1.response;

            if(player != null){
                console.log('Player ' + currentdeletebutton.getAttribute('id') + ' deleted.');
                
                var xhr = new XMLHttpRequest();

                xhr.open('GET', '../api/players', true);
                xhr.responseType= 'json';
                xhr.onload = function(){
                var data = xhr.response;

                if(data != null){
                    createTable(data);
                }else{
                console.log(data);
                }
    }

    xhr.send(null);

            }else{
                console.log('Ups, something is wrong.');
            }
            }
                
        xhr1.send(null);
            }


        var t = document.createTextNode("delete");
        currentdeletebutton.appendChild(t);

        mycurrent_cell1.appendChild(currentname);
        mycurrent_cell2.appendChild(currentvorname);
        mycurrent_cell3.appendChild(currentclub);
        mycurrent_cell4.appendChild(currentcoach);
        mycurrent_cell5.appendChild(currentnummer);
        mycurrent_cell6.appendChild(currentposition);
        mycurrent_cell7.appendChild(currentjahr);
        mycurrent_cell8.appendChild(currentdeletebutton);


        mycurrent_row.appendChild(mycurrent_cell1);
        mycurrent_row.appendChild(mycurrent_cell2);
        mycurrent_row.appendChild(mycurrent_cell3);
        mycurrent_row.appendChild(mycurrent_cell4);
        mycurrent_row.appendChild(mycurrent_cell5);
        mycurrent_row.appendChild(mycurrent_cell6);
        mycurrent_row.appendChild(mycurrent_cell7);
        mycurrent_row.appendChild(mycurrent_cell8);
    }

    myTable.appendChild(mytablebody);
    document.getElementById('tabelle1').appendChild(myTable);
}
