import styled from "styled-components"

const FooterContent = styled.footer`
    text-align: center;
    height: 34px;
    background-color: #eeee;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TextFooter = styled.p`
    font-size: 12px;
    font-weight: 400;
`


const Footer = () => {
  return (
   <>
   <FooterContent>
        <TextFooter> &copy; Todos os direitos reservados</TextFooter>
   </FooterContent>
   </>
  )
}

export default Footer