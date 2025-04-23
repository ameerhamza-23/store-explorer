import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="h-16 bg-blue-300 flex gap-4 justify-center items-center">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
        </nav>
    )
}