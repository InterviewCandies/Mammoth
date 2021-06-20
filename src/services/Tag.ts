import mock from "../mocks/tag"
import RootStateModel from "../types/RootStateModel";

class TagService {
    fetch() {
        return Object.values(mock);
    }
    create(newTags: RootStateModel) {
        mock[newTags.id] = newTags;
        return true;
    }
}

export default new TagService();