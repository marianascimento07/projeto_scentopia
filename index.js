const express = require('express');
const app = express();
// Caminho relativo
const path = require('path');
// Criando Rotas 
const router = express.Router();

app.use(express.static(path.join(__dirname)));

// Criando função da rota
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/home.html'));
    console.log(__dirname);
    console.log("home");

});

//Criando outra rota
router.get('/sobre', function(req, res) {
    console.log("style");
    res.sendFile(path.join(__dirname+''))
})

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server rodando")