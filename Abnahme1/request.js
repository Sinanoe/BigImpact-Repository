function myFunction() {

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
                              