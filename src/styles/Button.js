import styled from "styled-components"

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};
    font-size: 18px;
    font-weight: bold;
    border: none;
    padding: 18px 48px;
    cursor: pointer;
`

export default Button
