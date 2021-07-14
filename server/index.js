import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import { StaticRouter } from 'react-router-dom';


const PORT = process.env.PORT || 3006;
const app = express();

// app.use(express.static('./build'));

app.get('/*', (req, res) => {
  const context = {};
  let app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
    <App />
    </StaticRouter>
  );


  console.log('req', req.url);
  let title = 'Home';
  if (req.url === '/about')
  { title = "About";}
  else if (req.url === '/contact')
  { title = "conatc";}
 
  const indexFile = path.resolve('../build/index.html');
  console.log('Here',indexFile);
  
  fs.readFile('/Users/itmac022/Desktop/React/worker-test/build/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    data = data.replace(/\$OG_TITLE/g,  title+' Page');
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});