export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  
  type SetProductAction = {
    type: 'SET_PRODUCTS',
    payload: Product[]
  }

  export type ProductAction = SetProductAction