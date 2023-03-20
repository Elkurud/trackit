import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

export default function Frame({ children }) {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    )
}

const Container = styled.div`

    
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    padding: 90px 20px 100px 20px;
    background-color: #f2f2f2;
    align-items: center;

`