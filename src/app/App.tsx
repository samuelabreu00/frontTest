// App.tsx
import Header from '../components/header/Header'
import Products from '../components/productList/ProductList'
import Footer from '../components/footer/Footer'
import { CartProvider } from "../Context/cartContext"  


function App() {
  return (
    <CartProvider>  {/* Envolva seus componentes com CartProvider */}
      <Header />
      <Products />
      <Footer />
    </CartProvider>
  )
}

export default App;
