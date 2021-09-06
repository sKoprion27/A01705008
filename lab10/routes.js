
const requestHandler = (request, response) => {
    if (request.url === "/pag1"){

    }else if (request.url === "/pag2"){

    }else if (request.url === "/pag3"){

    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Pag no encontrada</h1>');

    }
}


module.exports = requestHandler;