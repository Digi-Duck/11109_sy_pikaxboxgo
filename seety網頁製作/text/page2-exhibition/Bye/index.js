const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempExhibition = fs.readFileSync(
  `${__dirname}/templates/template-exhibition.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  // console.log(url.parse(req.url));

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%EXHIBITION_CARDS%}', cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === '/exhibition') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const exhibition = dataObj[query.id];
    const output = replaceTemplate(tempExhibition, exhibition);
    res.end(output);
    //API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
    // NOT found
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h1>Page NOT FOUND</h1>');
  }
});
server.listen(8001, '127.0.0.1', () => {
  // console.log('Listen to requests on port 8001');
});
