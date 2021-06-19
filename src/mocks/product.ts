import ProductModel from "../types/ProductModel";

const products: ProductModel[] = [
    {
        id : "1",
        productName: "LV",
        category: "1",
        brand: "2",
        supplier: "1",
        price: 12000,
        quantity: 10,
        tags: ["1", "0"],
        discount: 10,
        image: "",
        display: "T",
        productCondition: "",
        summaryDescription: "",
        description: "",
        taxType: "",
        taxAmount : 10,
        minimumQuantity : 1,
        maximumQuantity : 2,
        detailsImage : "",
        productMaterial: "jean",
        uploadedDate: new Date().toISOString().split('T')[0],
        shippingMethod: "",
        shippingScope: "",
        shippingFeeType: "",
        shippingInfo: "",
        options: ['red', 'blue']
    }
]

export default products;