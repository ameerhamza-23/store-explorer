import { Product } from "../types/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setProducts } from "../actions/productActions";
import { RootState } from "../reducers";
import { filterAndSortProducts } from "../utils/filterAndSortProducts";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import Header from "../components/header/Header";
import Pagination from "../components/Pagination";

export default function HomePage() {
  const dispatch = useDispatch();
  const { products, lastFetched, categories } = useSelector(
    (state: RootState) => state.product
  );

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  }, []);

  useEffect(() => {
    console.log("use effect called")
    const FIVE_SECONDS = 5000;
    const now = Date.now();

    if (!products.length || !lastFetched || now - lastFetched > FIVE_SECONDS) {
      setLoading(true);
      fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setProducts(data.products));
          dispatch(setCategories(data.categories))
        })
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const updatedProducts = filterAndSortProducts(
      products,
      searchTerm,
      selectedCategory,
      sortOption
    );

    setFilteredProducts(updatedProducts);
  }, [searchTerm, selectedCategory, sortOption, products]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    navigate(`/?page=${page}`, { replace: true });
  };

  return (
    <div className="h-full w-full m-8 flex flex-col gap-8">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {loading ? (
        <div className="text-center text-lg font-semibold text-gray-600 py-10">
          Loading products...
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts
              .slice(
                (currentPage - 1) * productsPerPage,
                currentPage * productsPerPage
              )
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
