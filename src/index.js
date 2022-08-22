const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());


const NewsRoutes = require('./routes/News');
const CategoryRoutes = require('./routes/Category');

server.use('/news', NewsRoutes);
server.use('/category', CategoryRoutes);

server.listen(process.env.PORT || 3333);