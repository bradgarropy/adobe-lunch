import styled from "styled-components"

const Link = styled.a(
    ({theme}) => `
        color: ${theme.colors.red};

        :visited {
            color: ${theme.colors.red50};
        }
    `,
)

export default Link
