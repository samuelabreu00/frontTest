import styled from "styled-components"


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
const CartItem = () => {
   

    return (
        <>
            <Item>
                <ImgExemple alt="" />

                <Name> </Name>

                <div className="containerQuant">
                    <button className="lessQuant">-</button>
                    <p>1</p>
                    <button className="moreQuant">+</button>
                </div>

                <Price>R$</Price>
            </Item>
        </>
    )
}

export default CartItem