import { Route, Routes, Navigate } from "react-router-dom"
import { useUser } from './context/UserContext'
import { CartProvider } from './context/CartContext'
import Navigation from './components/Navigation'
import Producto from "./pages/Producto"
import Home from './pages/Home'
import Cart from './pages/Cart'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Perros from "./pages/Perros"
import Gatos from "./pages/Gatos"
import Admin from "./pages/Admin"


function App() {
  const { token } = useUser()

  return (
    <CartProvider>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perros" element={<Perros />} />
          <Route path="/gatos" element={<Gatos />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />
          <Route path="/login" element={token ? <Navigate to="/profile" /> : <LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </CartProvider>
  )
}

export default App
