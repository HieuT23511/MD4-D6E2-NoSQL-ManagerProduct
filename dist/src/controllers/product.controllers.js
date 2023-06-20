"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_schema_1 = require("../models/schemas/product.schema");
class ProductControllers {
    static async getCreateProductPage(req, res) {
        await res.render("create");
    }
    static async createNewProduct(req, res) {
        try {
            const product = new product_schema_1.productModel(req.body);
            if (product) {
                await product.save();
                res.redirect("/product/list");
            }
            else
                res.render("error");
        }
        catch (err) {
            res.render("error");
        }
    }
    static async getListProductPage(req, res) {
        try {
            const listProducts = await product_schema_1.productModel.find();
            res.render("list", { products: listProducts });
        }
        catch (err) {
            res.render("error");
        }
    }
}
exports.ProductControllers = ProductControllers;
//# sourceMappingURL=product.controllers.js.map