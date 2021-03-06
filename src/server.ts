import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter  from './router';
import * as cors from 'cors';
import Databse from './libs/database';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJsdoc from 'swagger-jsdoc';


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
        const options =  {
            swaggerDefinition: {
                info: {
                    title: 'Swagger javaScript-API',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    Bearer: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'headers',
                }
            }
        },
            asePath: '/api',
            swagger: '4.1.5',
            apis: ['./src/controllers/**/routes.ts'],
        };
          const specs = swaggerJsdoc(options);
          console.log("JSDocs", specs);
          this.app.use(
            '/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(specs, { explorer: true })
          );
        app.use('/api', mainRouter);
        app.use(notFoundHandler);
        app.use(errorHandler);
          return this;
    }
    public initBodyParser() {
        this.app.use(bodyParser.json());
    }
    run() {
        const { PORT, NODE_ENV , MONGO_URL } = this.config;

        Databse.open(MONGO_URL)
        .then((res) => {
            console.log('Succesfully connect with MongoDB');
            this.app.listen(PORT, () => {
                const message = `|| App is running at port '${PORT}' in '${NODE_ENV}' mode ||`;
                console.log(message);
            });
        })
        .catch((err) => console.log(err));

        return this;
     
    }

}
export default Server;
