// components/cart/Cart.tsx

import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../../Context/cartContext"
import CartItem from "../cartItem/CartItem";

const Section = styled.section`
  height: 100vh;
  background-color: #0f52ba;
  width: 486px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  padding: 33px 0;
  box-shadow: -5px 0 6px 0 #00000051;
  z-index: 10;
  display: none;
`;

const ContainerCart = styled.div`
  max-width: 400px;
  margin: 0 auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const HeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

const Title = styled.h1`
  width: 170px;
  height: 56px;
  font-weight: 700;
  font-size: 27px;
  line-height: 32.81px;
  color: #fff;
`;

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
`;
const Cart = () => {
  const context = useContext(CartContext);


  // Verifique se o contexto não é undefined
  if (!context) {
    return <div>Erro: Carrinho não carregado</div>;
  }

  const { productsCart } = context;
  const totalPrice = productsCart.reduce(
    (total, product) => total + product.price * product.quantity, 
    0
  );

  return (
    <Section>
      <ContainerCart>
        <HeaderCart>
          <Title>Carrinho de Compras</Title>
          <ButtonX>X</ButtonX>
        </HeaderCart>

        
        {productsCart.map((product) => (
        <CartItem key={product.id} product={product} />
        ))}

        <div>
          <p>Valor total: R${totalPrice.toFixed(2)}</p>
          <button>Finalizar Compra</button>
        </div>
      </ContainerCart>
    </Section>
  );
};


export default Cart;
