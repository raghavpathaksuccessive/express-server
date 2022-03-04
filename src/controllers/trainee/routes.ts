import{ Router } from 'express';
import traineeControler from './controller';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authmiddleware from '../../libs/routes/authmiddleware';
const traineeRouter = Router();

traineeRouter.route('/').get(authmiddleware('getUser', 'read'),validationHandler ( config.get ),traineeControler.get)

traineeRouter.route('/').post(traineeControler.create)

traineeRouter.route('/').put( authmiddleware('getUser', 'write'),validationHandler ( config.update ),traineeControler.update)

 traineeRouter.route('/:id').delete(authmiddleware('getUser', 'read'),validationHandler ( config.delete ),traineeControler.delete);

 traineeRouter.route('/login').post(traineeControler.login);
export default traineeRouter;

