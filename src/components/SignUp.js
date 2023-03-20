import logo from '../assets/Logo.png'
import styled from 'styled-components'
import React from "react";
import StyledInput from './StyledInput'
import apiSign from '../apis/apiSign'
import StyledForm from './StyledForm'
import StyledButton from './StyledButton'
import UserContext from '../contexts/UseContext';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

export default function SignIn() {

    const [onOff, setOnOff] = React.useState(false);
    const [signUpData, setSignUpData] = React.useState({ email: "", password: "", name: "", image: "" });
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext)

    function inputChange(e) {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    }

    function submit(e) {

        e.preventDefault()
        setOnOff(true)

        apiSign.signUp(signUpData)
            .then(response => {
                setOnOff(false)
                navigate("/")
            })
            .catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })

    }

    return(

        <Tela>
            <Logo src={logo}/>
            <StyledForm onSubmit={submit}>
                <StyledInput
                    data-test="email-input"
                    placeholder='email'
                    type='email'
                    name='email'
                    value={signUpData.email}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledInput
                    data-test="password-input"
                    placeholder='senha'
                    type='password'
                    name='password'
                    value={signUpData.password}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledInput
                    data-test="user-name-input"
                    placeholder='nome'
                    type='text'
                    name='name'
                    value={signUpData.name}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledInput
                    data-test="user-image-input"
                    placeholder='foto'
                    type='url'
                    name='image'
                    value={signUpData.image}
                    disabled={onOff}
                    onChange={inputChange}
                    required
                />
                <StyledButton type='submit' disabled={onOff} data-test="signup-btn" >
                    {onOff ? (
                        <ThreeDots width={50} height={50} color="#ffffff" />
                    ) : 'Cadastrar'}
                </StyledButton>
            </StyledForm>
            <Link to={"/"} data-test="login-link" >
                Já tem uma conta? Faça login!
            </Link>
        </Tela>

    )

}

const Tela = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 68px;

`

const Logo = styled.img`

    height: 180px;
    margin-bottom: 33px;

`