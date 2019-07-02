const express = require('express');
const app = express();

const config = {
    port: process.env.APP_PORT || '3000'
}

/*
 * Minimum security recommendation by Express.
 * x-powered-by exposes that you are using Express, which can
 * lead to targeted exploits.
 */  
app.disable('x-powered-by');

app.get('/myPage', function (request, response) {
    response.sendFile(`${__dirname}/index.html`);
});

// Catch all other traffic and send a 404 Not Found
app.all('*', function(request, response) {
    response.sendStatus(404);
});

app.listen(3000);

console.log(`Sample express server running on port ${config.port}`);