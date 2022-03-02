import { Request, Response, NextFunction, query } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';

class TraineeController {
    static instance: TraineeController;

    static getInstance() {
         if ( TraineeController.instance) {
             return TraineeController.instance;
         }
         TraineeController.instance = new TraineeController();
         return TraineeController.instance;
    }
    
    get = async( req: Request, res: Response, next: NextFunction) => {
        try {
          
                res.send({
                status:"ok",
                message: 'Successfully fetched trainee ',
                data:{
                     "data":"data"
                }         
                });

        } catch (err) {
            console.log('Inside err');
            next({
                message: 'No record found',
                code: 404,
            })
        }
    }
    update = async(req: Request, res: Response, next: NextFunction ) => {
        try {
          
            res.send({
            status:"ok",
            message: 'Successfully fetched trainee ',
            data:{
                 "data":"data"
            }         
            });

    } catch (err) {
        console.log('Inside err');
        next({
            message: 'No record found',
            code: 404,
        })
    }

    }
    create = async( req: Request, res: Response, next: NextFunction) => {
        try {
          let data = req.body;
          console.log(data)
          const token = jwt.sign({
            id:"123",
            email:"gpathak79@gmail.com"
        }, config.SECRET_KEY ,  { expiresIn: '15m' });
            res.send({
            status:"ok",
            message: 'Successfully fetched trainee ',
            data:{
                 "data":token
            }         
            });

    } catch (err) {
        console.log('Inside err',err);
        next({
            message: 'No record found',
            code: 404,
        })
    }
    }
    delete = async( req: Request, res: Response, next: NextFunction) => {
        try {
          
            res.send({
            status:"ok",
            message: 'Successfully fetched trainee ',
            data:{
                 "data":"data"
            }         
            });

    } catch (err) {
        console.log('Inside err');
        next({
            message: 'No record found',
            code: 404,
        })
    }
}
}
export default new TraineeController();