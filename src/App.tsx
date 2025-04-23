import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import MainLayout from './components/MainLayout'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/product/:id" element={<ProductPage />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
