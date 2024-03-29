import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import {PlaceProvider} from "../contexts"
import theme from "../styles/theme"
import Container from "../styles/Container"
import GlobalStyles from "../styles/GlobalStyles"

const StyledLayout = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    font-family: "Roboto", sans-serif;
    padding: 12px 16px;
    box-sizing: border-box;
`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />

                <StyledLayout>
                    <Header />

                    <PlaceProvider>
                        <Container>{children}</Container>
                    </PlaceProvider>

                    <Footer />
                </StyledLayout>
            </>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
