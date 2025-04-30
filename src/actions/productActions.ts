import { Product } from "types/Product";

export const setProducts = (products: Product[]) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products
    }
}

export const getProduct = (productId: number) => {
    return {
        type: 'GET_PRODUCT',
        payload: productId
    }
}

export const setCategories = (categories: string[]) => {
    return {
        type: 'SET_CATEGORIES',
        payload: categories
    }
}