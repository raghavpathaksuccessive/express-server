import{ Router } from 'express';
import userControler from './controller';
import validationHandler from '../../libs/validationHandler';
 import config from './validation';

const userRouter = Router();
userRouter.route('/')
.get( validationHandler ( config.get ),userControler.get)
.post( validationHandler ( config.create ),userControler.create)
.put( validationHandler ( config.update ),userControler.update)
userRouter.route('/:id').delete( userControler.delete);

export default userRouter;
