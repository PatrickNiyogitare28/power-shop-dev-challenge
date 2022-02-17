/* eslint-disable import/no-cycle */
import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import morgan from 'morgan';
import socketio from 'socket.io';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import accountsRoutes from './routes/accounts.routes';
import tokensRoutes from './routes/token.routes'

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
// app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(path.join(__dirname, '../public')));

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const BASE_URL = process.env.BASE_URL;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'ELECTRICITY SHOP API',
      version: '1.0.0',
      description: "Documentation of ELECTRICITY SHOP V1 API"
    },
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// connect socket
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.emit('welcome', 'welcome to electricity shop app');
  socket.on('join notification', (user) => {
    socket.join(user.id);
  });
  socket.on('disconnect', () => {});
});


// routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to electricity shop app api  v1' });
});

// custom routes

app.use(`${BASE_URL}/accounts`, accountsRoutes)
app.use(`${BASE_URL}/buy-power`, tokensRoutes)

export { io, app };

export default server;
