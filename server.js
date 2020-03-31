
import path from 'path';
import fs from 'fs';

import express from 'express';
import renderToString from 'preact-render-to-string';
//const { html } from'htm/preact');
import App from './src/index';
import { h } from 'preact';
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;


const serverRenderer = (req, res, next) => {
	fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return res.status(500).send('An error occurred');
		}
		const content = renderToString(<App />);
		return res.send(
			data.replace(
				'<div id="root"></div>',
				`<div id="root">${content}</div>`
			)
		);
	});
};

router.use('^/$', serverRenderer);

router.use(
	express.static(path.resolve(__dirname, '..', 'build'), {
		maxAge: '30d'
	})
);

app.use(router);

app.listen(port, () => {
	console.log(`Preact running in ${port}`);
});
