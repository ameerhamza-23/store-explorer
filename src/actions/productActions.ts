import { Product } from "../types/Product";

export const setProducts = (products: Product[]) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products
    }
}