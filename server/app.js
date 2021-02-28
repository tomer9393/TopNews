const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/category');
const articleRoutes = require('./routes/article');
const commentRoutes = require('./routes/comment');
const scrapeRoutes = require('./routes/scrape');

require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

var app = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

console.log(process.env.PORT);


app.use('/categories',categoryRoutes);
app.use('/articles',articleRoutes);
app.use('/comments',commentRoutes);
app.use('/scrapes',scrapeRoutes); 



app.listen(process.env.PORT);
