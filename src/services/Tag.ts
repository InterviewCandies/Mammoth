import mock from "../mocks/tag"
import RootStateModel from "../types/RootStateModel";

class TagService {
    fetch() {
        return Object.values(mock);
    }
    create() {
    }
}

export default new TagService();