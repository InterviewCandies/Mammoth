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
    summary: string,
    details: string,
    taxType: string,
    taxAmount: number,
    minimumQuantity: number,
    maximumQuantity: number,
    uploadedDate: string,
    shippingMethod: string,
    shippingScope: string,
    shippingFeeType: string,
    shippingInfo: string,
    options: string[],
    material: string
}

export default ProductModel;