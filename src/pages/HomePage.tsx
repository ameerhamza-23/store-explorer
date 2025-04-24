import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../actions/productActions"
import { RootState } from "../reducers"
import ProductCard from "../components/products/ProductCard"
import Header from "../components/home/Header"

export default function HomePage() {

    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.product.products)

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => dispatch(setProducts(data)))
    }, [])

    return (
        <div className="h-full w-full m-8 flex flex-col gap-8">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.length > 0 && products.map(product => <Link to={`/product/${product.id}`} key={product.id}><ProductCard product={product}/></Link>)}
            </div>
        </div>
    )
}