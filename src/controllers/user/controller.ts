import { Request, Response, NextFunction } from 'express';

class userController {
    static instance: userController;

    static getInstance() {
         if ( userController.instance) {
             return userController.instance;
         }
         userController.instance = new userController();
         return userController.instance;
    }
   
    get = async( req: Request, res: Response, next: NextFunction) => {
        try {
            res.send({
                status:"ok",
                message: 'Successfully fetched user ',
                data:{
                     "data":"data"
                }         
                });
        } catch (err) {
            console.log('Inside err');
        }
    }
    update = async(req: Request, res: Response, next: NextFunction ) => {
        try {
            res.send({
                status:"ok",
                message: 'Successfully fetched user ',
                data:{
                     "data":"data"
                }         
                });
            } catch (err) {
            console.log('Inside err', err);
        }

    }
    create = async( req: Request, res: Response, next: NextFunction) => {
        try {
            res.send({
                status:"ok",
                message: 'Successfully fetched user ',
                data:{
                     "data":"data"
                }         
                });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete = async( req: Request, res: Response, next: NextFunction) => {
        try {
            res.send({
                status:"ok",
                message: 'Successfully fetched user ',
                data:{
                     "data":"data"
                }         
                });
        } catch (err) {
            console.log('enter delete catch');
            console.log('Inside err', err);
        }
    }

    
}

export default new userController();