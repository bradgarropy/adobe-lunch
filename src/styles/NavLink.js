import {Link} from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)(
    ({theme}) => `
        color: ${theme.colors.black};
        text-decoration: none;
        font-weight: bold;

        :visited {
            color: ${theme.colors.black};
        }

        :hover {
            color: ${theme.colors.red};
        }
    `,
)

export default NavLink
