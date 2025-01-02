import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import CartItem from "../cartItem/CartItem";


const Section = styled.section`
  height: 100vh;
  background-color: #0f52ba;
  width: 486px;
  position: fixed;
  right: 0;
  top: 0;
  padding: 33px 0;
  box-shadow: -5px 0 6px 0 #00000051;
  z-index: 10;
`;

const ContainerCart = styled.div`
  max-width: 400px;
  margin: 0 auto;
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
  color: #fff;
`;

const ButtonX = styled.button`
  background-color: #000;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

interface CartProps {
  handleCloseCart: () => void;
}

const Cart: React.FC<CartProps> = ({ handleCloseCart }) => {
  


  const context = useContext(CartContext);

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
          <ButtonX onClick={handleCloseCart}>X</ButtonX>
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
