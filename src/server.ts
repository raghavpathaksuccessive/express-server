import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter  from './router';
import * as cors from 'cors';

class Server {
    app;
    constructor(private config) {
         this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
            return this;
    }
    public setupRoutes() {
         const { app } = this;
         app.use(cors());
        app.get('/health-check', ( req, res, next) => {
              res.send('I am Ok');
        });
       
        app.use('/api', mainRouter);
        app.use(notFoundHandler);
        app.use(errorHandler);
          return this;
    }
    public initBodyParser() {
        // this.app.use(bodyParser.json());
    }
    run() {
        const { PORT, NODE_ENV , MONGO_URL } = this.config;

                this.app.listen(PORT, () => {
                    const message = `|| App is running at port '${PORT}' in '${NODE_ENV}' mode ||`;
                    console.log(message);
                });
   
        return this;
     
    }

}
export default Server;
