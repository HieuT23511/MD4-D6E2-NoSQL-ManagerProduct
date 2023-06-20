import {Router} from "express";
import { ProductControllers } from "../controllers/product.controllers";



export const webRouter = Router();

webRouter.get('/create',ProductControllers.getCreateProductPage);
webRouter.post('/create',ProductControllers.createNewProduct);
webRouter.get("/list",ProductControllers.getListProductPage)