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
        res.redirect('/product/paging/1');
    }
    static async pagingList(req, res) {
        const currentPage = req.params.id;
        const listProducts = await product_schema_1.productModel.find();
        const totalProducts = listProducts.length;
        const limit = 3;
        const totalPage = Math.ceil(totalProducts / limit);
        const offset = (currentPage - 1) * limit;
        const dataDisplay = await product_schema_1.productModel.find().limit(limit).skip(offset);
        res.render('list', { products: dataDisplay, pages: totalPage, currentpage: currentPage });
    }
    static async getUpdateProductPage(req, res) {
        try {
            const productNeedToUpdate = await product_schema_1.productModel.findOne({
                _id: req.params.id,
            });
            res.render("update", { product: productNeedToUpdate });
        }
        catch (error) {
            res.render("error");
        }
    }
    static async updateProduct(req, res) {
        try {
            let { name, price, producer, avatar } = req.body;
            const productNeedToUpdate = await product_schema_1.productModel.findOne({
                _id: req.params.id,
            });
            productNeedToUpdate.name = name;
            productNeedToUpdate.price = price;
            productNeedToUpdate.producer = producer;
            productNeedToUpdate.avatar = avatar;
            productNeedToUpdate.save();
            res.redirect("/product/list");
        }
        catch (error) {
            res.render("error");
        }
    }
    static async deleteProduct(req, res) {
        try {
            let id = req.params.id;
            if (id) {
                await product_schema_1.productModel.deleteOne({ _id: id });
                return res.json({
                    status: "success",
                    message: "Product deleted successfully",
                });
            }
            else {
                return res.json({
                    status: "error",
                    message: "Product deleted not found",
                });
            }
        }
        catch (error) {
            res.render("error");
        }
    }
}
exports.ProductControllers = ProductControllers;
//# sourceMappingURL=product.controllers.js.map