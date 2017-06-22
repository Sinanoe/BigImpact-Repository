const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

var players = require('./api/players.json');

/*
 Die Dateien werden aus den jeweiligen Verzeichnissen statisch geladen
 */
app.use(express.static(__dirname + '/Homepage'));
app.use('/design', express.static(__dirname + '/design'));
app.use('/img', express.static(__dirname + '/images'));
app.use('/javascript', express.static(__dirname + '/javascript'));


/*
 So wird die home.html Datei beim Zugriff auf den Server (http://127.0.0.1:3000/) ausgegeben
 */

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/Homepage/home.html');
});


/* Als erstes Favoriten, dann die suche und dann alle ausgegeben */
app.route('/api/players').get((req, res)=> {
    var json = 0;
    if (req.query.favorites === 'true') {
        json = players.filter((x)=> {
            return x.favorit === true;
        });
        res.send(json);
    } else if (req.query.search) {
        json = players.filter((x)=> {
            return x.name.charAt(0).toLowerCase() === req.query.search.toLowerCase();
        });
        res.send(json);
    } else {
        res.send(players);
    }
});
/*
 Spieler speichern
 */
app.route('/api/players').post((req, res)=> {
    res.json({
        message: 'Spieler wurde erfolgreich gespeichert'
    });
});
/*
 Spieler updaten
 */
app.route('/api/players/:id').put((req, res)=> {
    res.json({
        message: 'Spieler mit der ID ' + req.params.id + ' wurde erfolgreich geupdatet'
    });
});
/*
 Spieler löschen
 */
app.route('/api/players/:id').delete((req, res)=> {
    var removedPlayer = false;
    for (var i in players) {
        if (req.params.id === players[i]._id) {
            players.splice(i, 1);
            removedPlayer = true;
        }
    }
    if (removedPlayer === true) {
        res.json({message: 'Spieler:' + req.params.id + ' wurde erfolgreich gelöscht'})
    } else {
        res.json({message: 'Spieler:' + req.params.id + ' wurde nicht gefunden'})
    }
});

/*
 Websockets
 */
io.on('connection', (socket) => {
    var addedUsername = false;
    socket.on('add user', (username) => {
        if (addedUsername) {
            return;
        }

// Username wird in der Socket Session vermerkt
        socket.username = username;
        addUsername = true;
        io.emit('user accede', {
            username: socket.username
        });
        console.log('User: ' + socket.username);
    });

    socket.on('new message', (data) => {
        io.emit('new message', {
            username: socket.username,
            message: data
        });
        console.log('Message:' + data);
    });
});

//Server auf port 3000
server.listen(3000);
console.log('Der Server läuft nun unter http://127.0.0.1: 3000');