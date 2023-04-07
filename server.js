import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import { connector } from './src/config/database.config.js';
import cors from 'cors';
import routes from './src/routes/index.js';

// C:\Users\Nguyen Anh\OneDrive\Documents\GitHub\Web-Project-2-be

// SSL applied

const key = fs.readFileSync('./cert/CA/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./cert/CA/localhost/localhost.crt');

// config dotenv file
dotenv.config();
connector(); // run db

const app = express();
// middleware server and client
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api
app.use('/api', routes);

// paypal ?
app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const server = https.createServer({ key, cert }, app);

const port = process.env.PORT;
server.listen(port, () =>
  console.log(`Server running at port: ${port}`)
);
