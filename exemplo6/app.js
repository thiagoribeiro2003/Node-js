import express from "express";
import nodemon from 'nodemon';

const app = express();

// Configurar a view engine com EJS (O B R I G A T Ó R I O)
app.set('view engine', 'ejs');

 // requisição e resposta
app.get('/', (req, res) => {
    // res.send('Teste'); Sempre q for configurar uma rota teste // ja send apenas exibi algo na tela
    const bandas = ["System of Down", "Daft Punk", "Calcinha Preta", "Justin Bieber", " Roberto Carlos"];
    res.render('paginas/index', {bandas}); // render renderiza um arquivo 
}); 


app.get('/sobre', (req, res) => {
    // res.send('Sobre');
    res.render('paginas/sobre')
})

app.get('/contato', (req, res) => {
    res.render('paginas/contato')
})

// Configurando rotas
app.listen(3000, () => {
    console.log("Servidor express rodando...");
});

// Instalando o nodemon -> atualiza o servidor automaticapente
// npm install -g nodemon 



// preparar para receber arquivos HTML
// instalação do EJS - npm install ejs