"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webRouter = void 0;
const express_1 = require("express");
const product_controllers_1 = require("../controllers/product.controllers");
exports.webRouter = (0, express_1.Router)();
exports.webRouter.get('/create', product_controllers_1.ProductControllers.getCreateProductPage);
exports.webRouter.post('/create', product_controllers_1.ProductControllers.createNewProduct);
exports.webRouter.get("/list", product_controllers_1.ProductControllers.getListProductPage);
//# sourceMappingURL=web.routers.js.map