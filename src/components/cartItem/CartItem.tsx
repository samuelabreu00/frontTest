import styled from "styled-components"
import { Product } from "../../Context/cartContext"
import { CartContext } from "../../Context/cartContext"
import { useContext } from "react"
import { IoTrashBinOutline } from "react-icons/io5";


const Item = styled.div`
width: 100%;
min-height: 110px;
display: flex;
background-color: #fff;
border-radius: 8px;
justify-content: center;
gap: 2.5rem;
align-items: center;
position: relative;

`
const ImgExemple = styled.img`
width: 46px;
height: 57px;
`
const Name = styled.div`
color: #2C2C2C;
font-weight: 400;
font-size: 13px;
width: 113px;
height: 33px;
line-height: 17px;
overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

`

const ContainerQuantity = styled.div `
display:flex;
align-items: center;
border: 1px solid gray;
gap: 10px;
padding: 0 10px;
border-radius: 5px;
`

const ButtonQuantity = styled.button `
background-color: transparent;
outline: none;
border: none;
font-size: 1.5rem;
color: gray;
cursor: pointer;
`

const Price = styled.p`
width: 62px;
height: 17px;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000;

`

const BinIcon = styled.div`
position: absolute;
top: 10px;
right: 10px;
font-size: 20px;
color: #a70000;
font-weight: bold;
cursor: pointer;

`


const CartItem: React.FC<{ product: Product }> = ({ product }) => {
    const { incrementQuantity, decrementQuantity, deleteProductCart } = useContext(CartContext)!;
 
    return (
      <Item>
        <BinIcon><IoTrashBinOutline onClick={() => deleteProductCart(product.id)}/></BinIcon>
        <ImgExemple src={product.image} alt={product.title} />
        <Name>{product.title}</Name>
        <ContainerQuantity className="containerQuant">
          <ButtonQuantity className="lessQuant" onClick={() => decrementQuantity(product.id)}>-</ButtonQuantity>
          <p>{product.quantity}</p>
          <ButtonQuantity className="moreQuant" onClick={() => incrementQuantity(product.id)}>+</ButtonQuantity>
        </ContainerQuantity>
        <Price>R${(product.price * product.quantity).toFixed(2)}</Price>
      </Item>
    );
  };
  
  export default CartItem;