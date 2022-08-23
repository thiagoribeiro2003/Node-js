import express  from "express";
const app = express();


// configurando a view ou (motor de visualização), EJS
app.set('view engine', 'ejs');

// configurando as rotas
app.get('/', (req, res) => {

   // res.send('Transformar em nodemon!!');
   let bandas = ['RPM', 'CPM22', 'JB',];
   res.render('index', {bandas}); 
})

app.get('/sobre', (req, res) => {
    res.render('sobre');
})

app.get('/contato', (req, res) => {
    res.render('contato');
})

// configurando o servidor
app.listen(3000, () => {
    console.log('Servidor Express rodandoooo!');
})