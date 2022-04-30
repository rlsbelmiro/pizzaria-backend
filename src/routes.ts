import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/users/CreateUserController';
import { AuthUserController } from './controllers/users/AuthUserController';
import { isAuthenticated } from './filters/isAuthenticated';
import { DetailUserController } from './controllers/users/DetailUserController';
import { CreateCategoryController } from './controllers/categories/CreateCategoryController';
import { ListCategoryController } from './controllers/categories/ListCategoryController';

import uploadConfig from './config/multer';
import multer from 'multer';
import { CreateProductController } from './controllers/products/CreateProductController';
import { ListProductByCategoryController } from './controllers/products/ListProductByCategoryController';
import { CreateOrderController } from './controllers/orders/CreateOrderController';
import { DeleteOrderController } from './controllers/orders/DeleteOrderController';
import { AddItemController } from './controllers/orders/AddItemController';
import { DeleteItemController } from './controllers/orders/DeleteItemController';
import { SendOrderController } from './controllers/orders/SendOrderController';
import { ListOrdersController } from './controllers/orders/ListOrdersController';
import { DetailOrderController } from './controllers/orders/DetailOrderController';
import { CheckoutOrderController } from './controllers/orders/CheckoutOrderController';

const router = Router();

const upload = multer(uploadConfig.upload('tmp'));

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle );
router.get('/category/products', isAuthenticated, new ListProductByCategoryController().handle);

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new DeleteOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete('/order/remove', isAuthenticated, new DeleteItemController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.get('/orders', isAuthenticated, new ListOrdersController().handle);
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle);
router.put('/order/checkout', isAuthenticated, new CheckoutOrderController().handle);

export { router }