"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    producer: String,
    avatar: String,
});
exports.productModel = (0, mongoose_1.model)("product", productSchema);
//# sourceMappingURL=product.schema.js.map