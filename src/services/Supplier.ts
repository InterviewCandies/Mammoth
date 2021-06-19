import mocks from "../mocks/supplier"

class SupplierService {
    fetch() {
        return Object.values(mocks);
    }
    create() {

    }
}

export default new SupplierService();