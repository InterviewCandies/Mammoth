import mocks from "../mocks/product"
import ProductModel from "../types/ProductModel";
import * as _ from "lodash";
import product from "../mocks/product";

class ProductService {
    fetch() : ProductModel[] {
        return Object.values(mocks);
    }
    update(products: ProductModel[]) {
        products.forEach(product =>  mocks[product.id] = {...product});
        return true;
    }
}

export default new ProductService();