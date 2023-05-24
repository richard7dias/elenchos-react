import styled from 'styled-components';


const BotaoMenu = styled.button`
    font-weight: bold;
    cursor: pointer;
    color: #fff;
    background-color: #99958f;
    border: none;
    margin: 0 10px;
    padding: 10px 20px;
    width: 200px;

    &:hover{
        background-color: #594b3b;
        transition: .2s;
    }

    &:active {
        background-color: #60CCC8;
        transition: .2s;
    }
`

export default BotaoMenu;