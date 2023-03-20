import { useContext } from "react";
import styled from "styled-components";
import UserContext from '../contexts/UseContext';
import logo from "../assets/Logo2.png"
import { Link } from 'react-router-dom';


export default function Header() {

    const { userData } = useContext(UserContext);
    

    return (

        <Container>
            <Link to="/hoje" >
                <img src={logo} alt="" />
            </Link>
            <Image src={userData.image} />
        </Container>

    )

}

const Container = styled.div`

    height: 70px;
    width: 375px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #126ba5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`

const Image = styled.img`

    height: 51px;
    width: 51px;
    border-radius: 51px;

`