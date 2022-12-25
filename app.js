import express from 'express';
import cors from 'cors';
import Youch from 'youch';
class App {
  /**
   * @constructor
   */
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.disable('x-powered-by');
    this.server.use(cors());
    this.server.use(express.json());
  }

  /* Route */
  routes() {
    this.server.use('/v1/api/', this.routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res
        .status(500)
        .json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
