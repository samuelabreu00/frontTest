// import { useState } from 'react';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }


// const ShoppingCart = () => {
//   const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

//   const addToCart = (product: Product) => {
//     const existingItemIndex = cart.findIndex(item => item.product.id === product.id);

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity++;
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (product: Product) => {
//     const existingItemIndex = cart.findIndex(item => item.product.id === product.id);

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity--;

//       if (updatedCart[existingItemIndex].quantity === 0) {
//         updatedCart.splice(existingItemIndex, 1);
//       }

//       setCart(updatedCart);
//     }
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.product.id}>
//             <span>{item.product.name}</span>
//             <span>Quantity: {item.quantity}</span>
//             <span>Price: {item.product.price}</span>
//             <button onClick={() => addToCart(item.product)}>+</button>
//             <button onClick={() => removeFromCart(item.product)}>-</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoppingCart
import styled from "styled-components"
import CartItem from "../cartItem/CartItem"


const Section = styled.section`
height: 100vh;
background-color: #0F52BA;
width: 486px;
height: 100%;
position: fixed;
right: 0;
top: 0;
padding: 33px 0;
box-shadow: -5px 0 6px 0 #00000051;
`
const ContainerCart = styled.div`
max-width: 400px;
margin: 0 auto;
box-sizing: content-box;

display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`
const HeaderCart = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
align-items: center;
`
const Title = styled.h1`
width: 170px;
height: 56px;
font-weight: 700;
font-size: 27px;
line-height: 32.81px;

color: #fff;
`
const ButtonX = styled.button`
background-color: #000;
width: 38px;
height: 38px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

font-size: 20px;
font-weight: 400;
color: #fff;
border: none;
outline: none;
cursor: pointer;
`




const Cart = () =>{
    return(
        <>
            <Section>
                <ContainerCart>
                <div className="containerTop">
                    <HeaderCart>
                        <Title>Carrinho de Compras</Title> <ButtonX>X</ButtonX>
                    </HeaderCart>
                    <CartItem/>
                </div>
                    
                    <div>
                    <p>Valor total : R$700</p>
                    <button>Finalizar Compra</button>
                    </div>
                </ContainerCart>
            </Section>
        </>
    )
}
export default Cart