import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

const services = [
  { icon:"vcard", title:"Batatasdfdf", body:"Lores Ipsum sdolores amet" },
  { icon:"files", title:"Yey", body:"Lores Ipsum sdolores amet" },
  { icon:"vcard", title:"Ba3", body:"Lores Ipsum sdolores amet" },
  { icon:"vcard", title:"Batata4", body:"Lores Ipsum sdolores amet" },
  { icon:"vcard", title:"Batata5", body:"Lores Ipsum sdolores amet" },
  { icon:"vcard", title:"Batata6", body:"Lores Ipsum sdolores amet" },
  { icon:"vcard", title:"Batata7", body:"Lores Ipsum sdolores amet" },
]

server.get('/list',function(req,res){
  res.send({data:services})
})

server.get('/ba',function(req,res){
  res.send('batata')
})

server.get('/new',function(req,res){
  const title = req.query.title
  const body =  req.query.body
  const icon =  req.query.icon
  if(!title || !body || !icon){
    res.status(403).send({status:403,message:'you have to provide all properties'})
    return;
  }
  const new_service = {title, body, icon}
  services.push(new_service)
  res.send({status:200, new_service})
})

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
          `<!DOCTYPE HTML>
          <html>
            <head>
              <title>Industrious by TEMPLATED</title>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
              <meta name="description" content="" />
              <meta name="keywords" content="" />
              ${ assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''}
              ${process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`}
              <link rel="stylesheet" href="template/assets/css/main.css" />
            </head>
            <body class="is-preload">
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>
            <div id="root">${markup}</div>
            </body>
          </html>
          `
      );
    }
  });

export default server;
