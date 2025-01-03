import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import CartItem from "../cartItem/CartItem";


const Section = styled.section`
  height: 100vh;
  background-color: #0f52ba;
  width: 700px;
  position: fixed;
  right: 0;
  top: 0;
  padding: 33px 10px 0 0;
  box-shadow: -5px 0 6px 0 #00000051;
  z-index: 10;
`;
const Adc = styled.p`
  color: #bebebe;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 40px;
`;

const ContainerCart = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  height: 60vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3a89ff; 
    border-radius: 10px; 
    border: 2px solid #f0f0f0; 
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0; 
    border-radius: 10px; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #2878d1; 
  }
`;


const HeaderCart = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  width: auto;
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
const TotalValueContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 3rem;
> p{
  font-size: 20px;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 500;
}
> button{
  background-color: #fff;
  border: none;
  outline: none;
  font-size: 16px;
  color: #001c46;
  padding: 10px;
  border-radius: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s;
  
  &:hover {
    opacity: .8;
  }
}
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
      <HeaderCart>
          <Title>Carrinho de Compras</Title>
          <ButtonX onClick={handleCloseCart}>X</ButtonX>
        </HeaderCart>

      <ContainerCart>
        {productsCart.length === 0 ? <Adc> Ainda não a itens adicionados ao seu carrinho.</Adc> : null}
        {productsCart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ContainerCart>
      
      <TotalValueContainer>
          <p>Valor total: R${totalPrice.toFixed(2)}</p>
          <button>Finalizar Compra</button>
      </TotalValueContainer>
    </Section>
  );
};

export default Cart;
