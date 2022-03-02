import * as jwt from 'jsonwebtoken';
import hasPermission from '../permission';

import config from '../../config/configuration';
export default (module, permissionType) => async (req, res, next) => {
    try {
   
        console.log('Module and permission is', module, permissionType);
        console.log('header', req.header('authorization'));
        const token = req.header('authorization');
        const decode = jwt.verify(token, config.SECRET_KEY);
        console.log('decoded user', decode);
    
            console.log('User in request', decode, module, permissionType);
            if (!hasPermission(module, permissionType, 'trainee')) {
                return next({
                    error: 'Unauthorized User role',
                    code: 403
                });
            }
            return next();
    }
    catch (err) {
        console.log(err)
        next({
            error: 'Unauthorized',
            code: 403
        });
    }
};