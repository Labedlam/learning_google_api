/**
 * Created by Zeo on 11/22/15.
 */

var express = require('express');
var app = express();
var path = require('path');
var bodyParser= require('body-parser');

app.set("port",( process.env.PORT || 8000)); // *** Study again




app.get('/*', function(req, res){
    var file= req.params[0] || 'assets/views/quickstart.html';
    res.sendFile(path.join(__dirname,'./public/',file));
});


app.listen(app.get('port'),function(){
    console.log('listening to port',app.get('port'));

});
