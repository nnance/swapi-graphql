/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 */

import express from 'express';
import { apolloServer } from 'apollo-server';
import swapiSchema from '../schema';
import { Tracer } from 'apollo-tracer';


const app = express();
const port = process.env.NODE_PORT || 3000;

// Requests to /graphql redirect to /
app.all('/graphql', (req, res) => res.redirect('/'));

const tracer = new Tracer({TRACER_APP_KEY: '16791A56-43B3-4738-9B36-680122AC1526'});
app.use('/', apolloServer({
  schema: swapiSchema,
  graphiql: true,
  tracer: process.env.NODE_ENV === 'production' ? tracer : null
}));

// Listen for incoming HTTP requests
const listener = app.listen(port, () => {
  var host = listener.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
  console.log(process.env.API_HOST ? `${process.env.API_HOST}/api/` : 'http://swapi.co/api/');
});
