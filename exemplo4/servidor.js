import http from 'http'; // Importando módulo http nativo do node (existe a partir da instalação do node na máquina). Pegar as requisições de URL.

import fs from 'fs/promises'; // JS assincrono (operações independentes, ocorrem em paralelo). FS = File System(Sistema de arquivos)

const monitorRequisicao = (requisicao, resposta) => { // arrow function
    
    resposta.writeHead(200, {"Content-type":"text/html; charset=utf8"});

   switch(requisicao.url){
    case '/':
        fs.readFile("paginas/index.html").then(conteudo => resposta.end(conteudo));
    break;

    case '/sobre':
          fs.readFile("paginas/sobre.html").then(conteudo => resposta.end(conteudo));
    break;

    default:
        resposta.writeHead(404);
        fs.readFile("paginas/404.html").then(conteudo => resposta.end(conteudo));
    break;
   }
}

// Criando um servidor com baseado no módulo http que importamos e monitorando ele
const servidor = http.createServer(monitorRequisicao);

// Iniciando o servidor 
servidor.listen(8080, () => { // se não colocar a porta é padrão que é 80 (Vamos colocar a porta 8080 para não dar pau por causa do xampp)
    console.log('Servidor rodando...')
}); 