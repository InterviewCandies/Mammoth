import mock from "../mocks/category"
import RootStateModel from "../types/RootStateModel";

class CategoryService {
    fetch() {
        return Object.values(mock);
    }
    create(category : RootStateModel) {
        mock[category.id] = category;
        return true;
    }
}

export default new CategoryService();