import { Dispatch } from "redux";
import { setProducts, setCategories } from "actions/productActions";
import { Product } from 'types/Product'

export async function fetchAndDispatchProducts({ serverUrl, dispatch, setLoading, products, lastFetched }: {
  serverUrl: string;
  dispatch: Dispatch;
  setLoading: (loading: boolean) => void;
  products: Product[];
  lastFetched: number | null;
}) {
  const FIVE_SECONDS = 5000;
  const now = Date.now();

  if (!products.length || !lastFetched || now - lastFetched > FIVE_SECONDS) {
    setLoading(true);
    try {
      const res = await fetch(`${serverUrl}/api/products`);
      const data = await res.json();
      dispatch(setProducts(data.products));
      dispatch(setCategories(data.categories));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }
}
