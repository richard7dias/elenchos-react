import styled from 'styled-components';

const Botao = styled.button`
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    background-color: #387876;
    border: none;
    margin: 0 10px;

    &:hover{
        background-color: #60CCC8;
        transition: .2s;
    }
    
    &:active {
        background-color: #99958f;
        transition: .2s;
    }
`
export default Botao;