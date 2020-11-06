import Router from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';

import multer from 'multer';
import uploadConfig from './config/upload';
import authMiddleware from './middlewares/auth';

const routes = Router();
const upload = multer(uploadConfig);


routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

routes.post('/create/user', UsersController.create);
routes.post('/authenticate', UsersController.login);

routes.post('/forgot_password', UsersController.forgotPassword);
routes.post('/new_password', UsersController.setNewPassword);

routes.post('/accept_orphanage/:id', authMiddleware, OrphanagesController.acceptOrphanage);

export default routes;