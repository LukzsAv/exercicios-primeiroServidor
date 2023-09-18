const express = require(`express`);
const app = express();


let cronometroInterval;
let segundos = 0;
let minutos = 0;


app.get(`/`, (req, res) => {
    segundos++;
    if (segundos >= 60) {
      segundos = 0;
      minutos++;
    }
      res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos`);
});

app.get(`/iniciar`, (req, res) => {
    

  res.send(`Cronômetro iniciado!`);
});


app.get(`/pausar`, (req, res) => {
  
  res.send(`Cronômetro pausado!`);
});

app.get(`/continuar`, (req, res) => {
  
    res.send(`Cronômetro continuando!`);
});

app.get(`/zerar`, (req, res) => {
  
    res.send(`Cronômetro zerado!`);
});

app.listen(8000, () =>{
    console.log(`Servidor iniciado na porta 3000`)
});