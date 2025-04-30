import { Product } from "types/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { filterAndSortProducts } from "utils/filterAndSortProducts";
import { useNavigate, useLocation } from "react-router-dom";
import ProductCard from "components/products/ProductCard";
import Header from "components/header/Header";
import Pagination from "components/Pagination";
import {fetchAndDispatchProducts} from 'utils/fetchProducts'

export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, lastFetched, categories } = useSelector(
    (state: RootState) => state.product
  );

  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const serverUrl = import.meta.env.VITE_SERVER_BASE_URL;

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
    else {
      setCurrentPage(1)
    }
  }, [location.search]);

  useEffect(() => {
    fetchAndDispatchProducts({ serverUrl, dispatch, setLoading, products, lastFetched }); 
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

    navigate(`/?page=${page}`);
  };


  if (loading) {
    return (
      <div className="w-full flex justify-center text-lg font-semibold text-gray-600 py-10">
        Loading products...
      </div>
    )
  }

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
    </div >
  );
}
