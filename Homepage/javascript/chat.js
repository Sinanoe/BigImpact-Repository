$(document).ready(function () {
    var socket = io();
    var userEingabe = $('#name');
    var messages = $('#text');
    var username = '';


    /*
     Die Funktion addUser() fügt einen neuen User/ usernamen hinzu
     */
    function addUser() {
        username = userEingabe.val();
        if (username) {
            userEingabe.val('');
            socket.emit('add user', username);
        }
    }

    /*
     Die Funktion send() schickt die gewählte Nachricht ab, sofern Username und die Eingabe des Users (userEingabe) vorhanden sind
     */
    function send() {
        var message = userEingabe.val();
        if (userEingabe && username) {
            userEingabe.val('');
            socket.emit('new message', message);
        }
    }

    /*
     Durch diese Funktion wird entweder das Formular abgeschickt und somit eine Nachricht für einen
     User hinzugefügt oder ein neuer User wird angelegt
     */
    $('form').submit((e)=> {
        e.preventDefault();
        if (username) {
            send();
        } else {
            addUser();
        }
    });

    /*
     Hier wird entschieden, was übertragen wird. Entweder wird "Willkommen: und der gewählte Username" gesendet,
     oder der Username + die Nachricht
     */
    socket.on('user accede', (data)=> {
        messages.append('Willkommen: ' + data.username + '\n');
    });

    socket.on('new message', (data)=> {
        messages.append(data.username + ': ' + data.message + '\n');
    });
});