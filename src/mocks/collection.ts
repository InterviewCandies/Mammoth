import CollectionModel from "../types/CollectionModel";
import RootStateModel from "../types/RootStateModel";

let collection: Record<string, CollectionModel> = {};
const storage = localStorage.getItem('persist:root');
if (storage) {
    const str = JSON.parse(storage);
    const collections = JSON.parse(str['collection'])['collection'];
   collections.forEach((item: CollectionModel) => collection[item.id] = item)
}
else collection =  {
    '0': {
        id: '0',
        name: 'collection1',
        products: ["60d01cff1b985f214b6d8c99"]
    }
}

export default collection;