const express = require('express');
const helmet = require('helmet');

const app = express();
const config = {
    port: process.env.APP_PORT || '3000'
};

/*
 * Minimum security recommendation by Express.
 * x-powered-by exposes that you are using Express, which can
 * lead to targeted exploits. Since this example uses helmet,
 * this is not needed as it will do this for us.
 */
// app.disable('x-powered-by');

/*
 * Helmet is an excellent package that will handle many
 * basic security recommendations by Express, and can be
 * customized to meet your needs/requirements.
 */
app.use(helmet());

// This is used for serving static files such as
// images, js, css, html, etc.
app.use('/resources', express.static('resources'));

// Mount the landing page
app.get('/', function (request, response) {
    response.sendFile(`${__dirname}/index.html`);
});

// Catch all other traffic and send a 404 Not Found
app.all('*', function (request, response) {
    response.sendStatus(404);
});

app.listen(3000);

console.log(`Sample express server running on port ${config.port}`);