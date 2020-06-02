import {Link} from "gatsby"
import styled from "styled-components"

const Button = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    box-sizing: border-box;
    padding: 18px 24px;
    cursor: pointer;
    text-decoration: none;
    border: ${({theme}) => `3px solid ${theme.colors.red}`};
    background-color: ${({theme, secondary}) =>
        secondary ? theme.colors.white : theme.colors.red};
    color: ${({theme, secondary}) =>
        secondary ? theme.colors.red : theme.colors.white};
`

export default Button
