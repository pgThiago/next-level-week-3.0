import Router from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';

import multer from 'multer';
import uploadConfig from './config/upload';
import authMiddleware from './middlewares/auth';

const routes = Router();
const upload = multer(uploadConfig);


routes.get('/orphanages', authMiddleware , OrphanagesController.index);
routes.get('/orphanage/:id', authMiddleware, OrphanagesController.show);
routes.post('/orphanages', authMiddleware, upload.array('images'), OrphanagesController.create);

routes.post('/create/user', UsersController.create);
routes.post('/authenticate', UsersController.login);

routes.post('/forgot_password', UsersController.forgotPassword);

export default routes;