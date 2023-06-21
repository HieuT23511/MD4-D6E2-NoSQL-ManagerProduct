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
    // try {
    //   const listProducts = await productModel.find();
    //   res.render("list", { products: listProducts });
    // } catch (err) {
    //   res.render("error");
    // }
    res.redirect('/product/paging/1')
  }
  static async pagingList (req:any, res:any){
    const currentPage = req.params.id;
    const listProducts = await productModel.find();
    const totalProducts = listProducts.length;
    const limit = 3;
    const totalPage = Math.ceil(totalProducts/limit);
    const offset = (currentPage-1)*limit;
    const dataDisplay = await productModel.find().limit(limit).skip(offset);
    res.render('list', {products: dataDisplay, pages: totalPage, currentpage: currentPage});
  }
  static async getUpdateProductPage(req: any, res: any) {
    try {
      const productNeedToUpdate = await productModel.findOne({
        _id: req.params.id,
      });
      res.render("update", { product: productNeedToUpdate });
    } catch (error) {
      res.render("error");
    }
  }
  static async updateProduct(req: any, res: any) {
    try {
      let { name, price, producer, avatar } = req.body;
      const productNeedToUpdate = await productModel.findOne({
        _id: req.params.id,
      });
      productNeedToUpdate.name = name;
      productNeedToUpdate.price = price;
      productNeedToUpdate.producer = producer;
      productNeedToUpdate.avatar = avatar;
      productNeedToUpdate.save();
      res.redirect("/product/list");
    } catch (error) {
      res.render("error");
    }
  }
  static async deleteProduct(req: any, res: any) {
    try {
      let id = req.params.id;
      if (id) {
        await productModel.deleteOne({ _id: id });
        return res.json({
          status: "success",
          message: "Product deleted successfully",
        });
      } else {
        return res.json({
          status: "error",
          message: "Product deleted not found",
        });
      }
    } catch (error) {
      res.render("error");
    }
  }
}
