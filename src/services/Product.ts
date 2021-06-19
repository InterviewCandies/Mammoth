import mocks from "../mocks/product"
import ProductModel from "../types/ProductModel";

class ProductService {
    fetch() : ProductModel[] {
        return mocks;
    }

    update() {

    }
}

export default new ProductService();