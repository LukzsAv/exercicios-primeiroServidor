const express = require(`express`);
const lodash = require(`lodash`);

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let index = 0;

app.get(`/`, (req, res) => {
    if(index >= jogadores.length){
        index = 0;
    }
    res.send(`É a vez de ${jogadores[index]} jogar!`);
    index++
});


app.listen(3000, () =>{
    console.log(`Servidor iniciado na porta 3000`)
});