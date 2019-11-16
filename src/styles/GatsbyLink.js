import styled from "styled-components"
import {Link} from "gatsby"

const GatsbyLink = styled(Link)(
    ({theme}) => `
        color: ${theme.colors.red};

        :visited {
            color: ${theme.colors.red};
        }
    `,
)

export default GatsbyLink
