import styled from "styled-components"
import Items from "../items/Items"

const Main = styled.main`
    height: 924px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ContainerMain = styled.div`
    max-width: 938px;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 0 24px;
    height: 601px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.2rem;
`


const Products = () => {
  return (
    <>
    <Main>
        <ContainerMain>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
        </ContainerMain>
    </Main>
    </>
  )
}

export default Products