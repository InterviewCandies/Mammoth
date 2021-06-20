import mocks from "../mocks/collection";
import CollectionModel from "../types/CollectionModel";

class CollectionService {
    fetch() {
        return mocks;
    }
    create(newCollection: CollectionModel) {
      //  mocks.push({...newCollection});
        return true
    }
}

export default new CollectionService();