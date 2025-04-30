import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "reducers/index";

export default function Navbar() {

    const cartLength = useSelector((state: RootState) => state.cart.cart.length)

    return (
        <nav className="h-16 bg-blue-300 flex items-center justify-between">

            <div className="p-4 flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>

            <div className="p-4">
                Items :  {cartLength}
            </div>

        </nav>
    )
}