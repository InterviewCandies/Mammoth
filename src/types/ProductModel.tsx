interface ProductModel {
    id: string,
    productName : string,
    category: string,
    brand: string,
    supplier: string,
    price: number,
    quantity: number
    tags: string[],
    discount: number,
    image: string,
    display: string,
    productCondition: string,
    summaryDescription: string,
    description: string,
    taxType: string,
    taxAmount: number,
    minimumQuantity: number,
    maximumQuantity: number,
    detailsImage: string,
    productMaterial: string,
    uploadedDate: string,
    shippingMethod: string,
    shippingScope: string,
    shippingFeeType: string,
    shippingInfo: string,
    options: string[]
}

export default ProductModel;