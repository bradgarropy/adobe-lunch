import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Header from "./Header"
import Footer from "./Footer/Footer"
import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"
import Container from "../styles/Container"

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    font-family: "Roboto", sans-serif;
    padding: 12px 16px;
    box-sizing: border-box;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles/>

            <StyledLayout>
                <Header/>
                <Container>{children}</Container>
                <Footer/>
            </StyledLayout>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
