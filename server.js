import express from 'express';
import dotenv from 'dotenv';
import seedRouter from './src/routes/SeedRouter.js';
import combineRouter from './src/routes/CombineRouter.js';
import productRouter from './src/routes/ProductsRouter.js';
import newsRouter from './src/routes/NewsRouter.js';
import userRouter from './src/routes/UserRouter.js';
import orderRouter from './src/routes/OrdersRouter.js';
import wishListRouter from './src/routes/WishListRouter.js';
import { connector } from './src/config/database.js';

// config dotenv file
dotenv.config();
connector(); // run db

const app = express();
// middleware server and client
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api
app.use('/api/seed', seedRouter);
app.use('/api/combine', combineRouter);
app.use('/api/products', productRouter);
app.use('/api/posts', newsRouter);
app.use('/api/user', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/wishlist', wishListRouter);

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Server running at port: ${port}`)
);
