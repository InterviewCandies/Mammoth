import mocks from "../mocks/brand";

class BrandService {
    fetch() {
        return Object.values(mocks);
    }
    create() {

    }
}

export default new BrandService();