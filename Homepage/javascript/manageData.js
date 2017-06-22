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
    
    xhr.open('POST', 'players.json', true);
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
    
    xhr.open('GET', 'players.json', true);
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

//table creation
function createTable(data){

    document.getElementById('tabelle1').innerHTML = "";

    var myTable = document.createElement("table"); 
    var mytablebody = document.createElement("tbody");
    mycurrent_throw = document.createElement("tr")
    
    var th1 = document.createElement("th");
    textname = document.createTextNode("Name");
    th1.appendChild(textname);
    
    var th2 = document.createElement("th");
    textvorname = document.createTextNode("Vorname");
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
    
    mycurrent_throw.appendChild(th1);
    mycurrent_throw.appendChild(th2);
    mycurrent_throw.appendChild(th3);
    mycurrent_throw.appendChild(th4);
    mycurrent_throw.appendChild(th5);
    mycurrent_throw.appendChild(th6);
    mycurrent_throw.appendChild(th7);
    
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

            
        currentname = document.createTextNode("" + data[key].name);
        currentvorname = document.createTextNode("" + data[key].vorname);
        currentclub = document.createTextNode("" + data[key].club);
        currentcoach = document.createTextNode("" + data[key].coach);
        currentnummer = document.createTextNode("" + data[key].number);
        currentposition = document.createTextNode("" + data[key].position);
        currentjahr = document.createTextNode("" + data[key].year);
        
        mycurrent_cell1.appendChild(currentname);
        mycurrent_cell2.appendChild(currentvorname); 
        mycurrent_cell3.appendChild(currentclub); 
        mycurrent_cell4.appendChild(currentcoach); 
        mycurrent_cell5.appendChild(currentnummer); 
        mycurrent_cell6.appendChild(currentposition); 
        mycurrent_cell7.appendChild(currentjahr); 
        
        mycurrent_row.appendChild(mycurrent_cell1); 
        mycurrent_row.appendChild(mycurrent_cell2); 
        mycurrent_row.appendChild(mycurrent_cell3); 
        mycurrent_row.appendChild(mycurrent_cell4); 
        mycurrent_row.appendChild(mycurrent_cell5); 
        mycurrent_row.appendChild(mycurrent_cell6); 
        mycurrent_row.appendChild(mycurrent_cell7); 
    
    }

    myTable.appendChild(mytablebody); 
    document.getElementById('tabelle1').appendChild(myTable); 
}