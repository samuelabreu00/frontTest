import styled from "styled-components"
import { Product } from "../../Context/cartContext"
import { CartContext } from "../../Context/cartContext"
import { useContext } from "react"


const Item = styled.div`
width: 100%;
height: 95px;
display: flex;
background-color: #fff;

border-radius: 8px;
justify-content: center;
gap: 2.5rem;
align-items: center;
margin-top: 5rem;
`
const ImgExemple = styled.img`
width: 46px;
height: 57px;
`
const Name = styled.p`
color: #2C2C2C;
font-weight: 400;
font-size: 13px;
width: 113px;
height: 33px;
line-height: 17px;

`
const Price = styled.p`
width: 62px;
height: 17px;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000;

`
const CartItem: React.FC<{ product: Product }> = ({ product }) => {
    const { incrementQuantity, decrementQuantity } = useContext(CartContext)!;
  
    return (
      <Item>
        <ImgExemple src={product.image} alt={product.title} />
        <Name>{product.title}</Name>
        <div className="containerQuant">
          <button className="lessQuant" onClick={() => decrementQuantity(product.id)}>-</button>
          <p>{product.quantity}</p>
          <button className="moreQuant" onClick={() => incrementQuantity(product.id)}>+</button>
        </div>
        <Price>R${(product.price * product.quantity).toFixed(2)}</Price>
      </Item>
    );
  };
  
  export default CartItem;