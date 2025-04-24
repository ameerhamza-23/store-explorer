import { Product } from "../types/Product";

export const addToCart = (product: Product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const RemoveFromCart = (productId: number) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId
    }
}