// App.tsx
import Header from '../views/components/header/Header'
import Products from '../views/components/products/Products'
import Footer from '../views/components/footer/Footer'
import { CartProvider } from "../Context/cartContext"  
import Cart from '../views/components/cart/Cart'  

function App() {
  return (
    <CartProvider>  {/* Envolva seus componentes com CartProvider */}
      <Header />
      <Products />
      <Footer />
      <Cart />  {/* Descomente esta linha para exibir o carrinho */}
    </CartProvider>
  )
}

export default App;
