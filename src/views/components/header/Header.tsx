import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import imgLogo from "../../../assets/MKS.svg"
import imgLogo2 from "../../../assets/Sistemas.svg"
import imgCart from "../../../assets/Vector.svg"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: "Montserrat", sans-serif;
}
`
const HeaderStyle = styled.header`
background-color: #0F52BA;
height: 101px;
display: flex;
justify-content: center;

`;

const ContainerHeader = styled.div`
max-width: 1350px;
padding: 0 24px;
box-sizing: content-box;
margin: 0 auto;
display: flex;
align-items: center;
gap: 1rem;
justify-content: space-between;
width: 100%;
`

const ContainerLogo = styled.div`
display: flex;
align-items: center;
gap: 8px;
`

const ContainerCart = styled.div`
background-color: #fff;
width: 90px;
height: 45px;
border-radius: 8px;
gap: 10px;
display: flex;
justify-content: center;
align-items: center;
`
const ImgCart = styled.img`
width: 19px;
`
const NumberCart = styled.p`
font-weight: 700;
`

const Header = () => {
   
  return (
    <>
    <GlobalStyle />
    <HeaderStyle>
        <ContainerHeader >
            <ContainerLogo className="container-logo">
                <img src={imgLogo} alt="" className="logo" />
                <img src={imgLogo2} alt="" className="logo"/>
            </ContainerLogo>
            <ContainerCart>
                <ImgCart src={imgCart} alt="" className="imgCart" />
                <NumberCart>0</NumberCart>
            </ContainerCart>
            
        </ContainerHeader>
    </HeaderStyle>
    </>
  )
}

export default Header