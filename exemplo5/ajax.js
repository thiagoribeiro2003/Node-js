import fetch from 'node-fetch';

const url = `https://viacep.com.br/ws/08280430/json/`;

// Conectando com o endpoint da API (url)
fetch(url)
    // retornando a resposta como JSON
    .then(resposta => resposta.json())

    // exibir a resposta (obtida na API) no console
    .then(dados => console.log(dados));