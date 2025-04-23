import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="h-16 bg-blue-300 flex items-center justify-between">

            <div className="p-4 flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>

            <div className="p-4">
                count 0
            </div>

        </nav>
    )
}