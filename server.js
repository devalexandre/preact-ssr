const express = require('express');
const renderToString = require('preact-render-to-string');
const { html } = require('htm/preact');
const App = require('./src/index');

const app = express();
const port = process.env.PORT || 8080;
app.get('/', (request, response) => {
	const content = renderToString(html`<${App} url=${request.url} />`);
	response.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <div id="app">${content}</div>
      </body>
    </html>
  `);
});


app.listen(port, () => {
	console.log(`Preact running in ${port}`);
});
