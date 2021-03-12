const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const categoryRoutes = require('./routes/category');
const articleRoutes = require('./routes/article');
const commentRoutes = require('./routes/comment');
const filterRoutes = require('./routes/filter');
const contactRoutes = require('./routes/contact');
const scrapeRoutes = require('./routes/scrape');
const userRoutes = require('./routes/user');
const articleService = require('./services/article');
const categoryService = require('./services/category');
var EventEmitter = require('./common/emitter');
var ActiveUsers = require('./common/realTime');

var myEmitter = EventEmitter.myEmitter;

require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

const corsConfig = {
    credentials: true,
    origin: true,
};

var app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000','http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors(corsConfig));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());


console.log(process.env.PORT);

app.use('/categories',categoryRoutes);
app.use('/articles',articleRoutes);
app.use('/comments',commentRoutes);
app.use('/filters',filterRoutes); 
app.use('/contacts',contactRoutes); 
app.use('/scrapes',scrapeRoutes); 
app.use("/users", userRoutes);

const server = http.createServer(app);

const io = socketIo(server);

var countActiveUsers = ActiveUsers.countActiveUsers;
var countCategories = 0;
var countArticles = 0;

categoryService.getNumOfCategories().then((docs) => {
    countCategories= docs;
    myEmitter.emit('emitCat');
});

articleService.getNumOfArticles().then((docs) => {
    countArticles= docs;
    myEmitter.emit('emitArt');
});

myEmitter.on('createCategory', () => {
    countCategories++;
    myEmitter.emit('emitCat');
});

myEmitter.on('deleteCategory', () => {
    countCategories--;
    myEmitter.emit('emitCat');
});


myEmitter.on('createArticle', () => {
    countArticles++;
    myEmitter.emit('emitArt');
});

myEmitter.on('deleteArticle', () => {
    countArticles--;
    myEmitter.emit('emitArt');
});

io.on('connection', (socket) => {        
    if (socket.handshake.headers.origin === "http://localhost:3000") {
        ActiveUsers.countActiveUsers++;        
        socket.broadcast.emit('countActiveUsers', ActiveUsers.countActiveUsers);             

        socket.on('disconnect', () => {
            ActiveUsers.countActiveUsers--;                   
            socket.broadcast.emit('countActiveUsers', ActiveUsers.countActiveUsers);           
        });
    }
    else if (socket.handshake.headers.origin === "http://localhost:4200") {
        socket.broadcast.emit('countActiveUsers', ActiveUsers.countActiveUsers);           
        socket.broadcast.emit('countCategories', countCategories);
        socket.broadcast.emit('countArticles', countArticles);

        myEmitter.on('emitCat', () => {
            socket.broadcast.emit('countCategories', countCategories);
        });
        myEmitter.on('emitArt', () => {
            socket.broadcast.emit('countArticles', countArticles);
        });
    }
}); 

server.listen(process.env.PORT);
