import { Router } from 'express';

import UserController from'./app/controllers/UserController';

const routes = Router();

routes.post('/users',UserController.create);
routes.get('/users',UserController.index)

export default routes;
