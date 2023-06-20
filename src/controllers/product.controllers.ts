import { productModel } from "../models/schemas/product.schema";

export class ProductControllers {
  static async getCreateProductPage(req: any, res: any) {
    await res.render("create");
  }

  static async createNewProduct(req: any, res: any) {
    try {
      const product = new productModel(req.body);
      if (product) {
        await product.save();
        res.redirect("/product/list");
      } else res.render("error");
    } catch (err) {
      res.render("error");
    }
  }
  static async getListProductPage(req: any, res: any) {
    try {
      const listProducts = await productModel.find();
      res.render("list",{products:listProducts})
    } catch (err) {
      res.render("error");
    }
  }
}
