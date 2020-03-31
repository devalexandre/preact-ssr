const { html, h } = require('htm/preact');

const App = () => (
	html`
      <div class="app">
        <h1>This is an app</h1>
        <p>Current server time: ${new Date() + ''}</p>
      </div>
    `);

module.exports = App;
