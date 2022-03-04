import{ Router } from 'express';
import userControler from './controller';
import validationHandler from '../../libs/validationHandler';
 import config from './validation';
import authmiddleware from '../../libs/routes/authmiddleware';

const userRouter = Router();
userRouter.route('/')
.get( authmiddleware('getUser', 'read'),validationHandler ( config.get ),userControler.get)
.post( authmiddleware('getUser', 'write'),validationHandler ( config.create ),userControler.create)
.put( authmiddleware('getUser', 'write'),validationHandler ( config.update ),userControler.update)
userRouter.route('/:id').delete( authmiddleware('getUser', 'delete'),userControler.delete);

export default userRouter;
