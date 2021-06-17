import mock from "../mocks/category"

class CategoryService {
    fetch() {
        return Object.values(mock);
    }
    create() {

    }
}

export default new CategoryService();