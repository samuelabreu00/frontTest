import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { InputHTMLAttributes } from "react";


const SearchLabel = styled.div`
width: 400px;
position: relative;
@media (max-width: 650px) {
    width: 200px;
  }
>input{
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 1rem;
  border-radius: 19px;
  border: none;
  outline: none;
  background-color: #e5e5e5;
}
>div{
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  top: 53%;
  right: 15px;
  font-size: 20px;
  color: #545454;
  cursor: pointer;
  transition: all.3s;
  &:hover{
    color: #000;
  }
}
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    handleChange: (value: string) => void
}

const SearchInput = (props: InputProps) =>{

    return(
        <SearchLabel>
            <input onChange={(e) => props.handleChange(e.target.value)} type="text" placeholder="Pesquisar produto"/>
            <div>
                <HiMagnifyingGlass />
            </div>
        </SearchLabel>
    )
}

export default SearchInput