import mocks from "../mocks/supplier"
import RootStateModel from "../types/RootStateModel";

class SupplierService {
    fetch() {
        return Object.values(mocks);
    }
    create(newSupplier: RootStateModel) {
        mocks[newSupplier.id] = newSupplier;
        return true;
    }
}

export default new SupplierService();