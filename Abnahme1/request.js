function myFunction(){   

var formData = new FormData();
	formData.append('username', 'johndoe');
	formData.append('id', 123456);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://188.166.165.74:13337', true);
	xhr.onload = function(e) {
        
    };

	xhr.send(formData);
                              
}
                              
                              