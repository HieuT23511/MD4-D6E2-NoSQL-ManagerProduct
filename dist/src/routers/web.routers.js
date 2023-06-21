"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webRouter = void 0;
const express_1 = require("express");
const product_controllers_1 = require("../controllers/product.controllers");
exports.webRouter = (0, express_1.Router)();
exports.webRouter.get('/create', product_controllers_1.ProductControllers.getCreateProductPage);
exports.webRouter.post('/create', product_controllers_1.ProductControllers.createNewProduct);
exports.webRouter.get("/list", product_controllers_1.ProductControllers.getListProductPage);
exports.webRouter.get("/:id/update/", product_controllers_1.ProductControllers.getUpdateProductPage);
exports.webRouter.post("/:id/update/", product_controllers_1.ProductControllers.updateProduct);
exports.webRouter.get("/:id/delete/", product_controllers_1.ProductControllers.deleteProduct);
exports.webRouter.get("/paging/:id", product_controllers_1.ProductControllers.pagingList);
//# sourceMappingURL=web.routers.js.map