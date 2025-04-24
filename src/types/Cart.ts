import { Product } from "./Product";

type AddToCart = {
    type: "ADD_TO_CART";
    payload: Product
}
type RemoveFromCart = {
    type: "REMOVE_FROM_CART";
    payload: Product
}

export type CartAction = AddToCart | RemoveFromCart
