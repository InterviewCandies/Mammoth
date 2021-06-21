import mock from "../mocks/tag"
import RootStateModel from "../types/RootStateModel";

class TagService {
    fetch() {
        return Object.values(mock);
    }
    create(newTag: RootStateModel) {
        mock[newTag.id] = newTag;
        return true;
    }
}

export default new TagService();