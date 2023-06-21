import {Router} from "express";
import { ProductControllers } from "../controllers/product.controllers";



export const webRouter = Router();

webRouter.get('/create',ProductControllers.getCreateProductPage);
webRouter.post('/create',ProductControllers.createNewProduct);
webRouter.get("/list",ProductControllers.getListProductPage)
webRouter.get("/:id/update/",ProductControllers.getUpdateProductPage);
webRouter.post("/:id/update/",ProductControllers.updateProduct);
webRouter.get("/:id/delete/",ProductControllers.deleteProduct);
webRouter.get("/paging/:id",ProductControllers.pagingList)