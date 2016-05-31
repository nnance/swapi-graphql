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


const app = express();

// Requests to /graphql redirect to /
app.all('/graphql', (req, res) => res.redirect('/'));

app.use('/', apolloServer({
  schema: swapiSchema,
  graphiql: true
}));

// Listen for incoming HTTP requests
const listener = app.listen(() => {
  var host = listener.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  var port = listener.address().port;
  console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
});
