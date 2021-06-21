import mocks from "../mocks/collection";
import CollectionModel from "../types/CollectionModel";

class CollectionService {
    fetch() {
        return Object.values(mocks);
    }
    create(newCollection: CollectionModel) {
        mocks[newCollection.id] = newCollection;
        return true
    }
}

export default new CollectionService();