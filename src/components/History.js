import styled from "styled-components";
import Frame from "./Frame";


export default function History() {

    return (<Frame>
        <Title>Histórico</Title>

        <Conclusion>Em breve você poderá ver o histórico dos seus hábitos aqui!</Conclusion>
    </Frame>
    )
}


const Title = styled.p`

    font-size: 22px;
    line-height: 29px;
    color: #126BA5; 
    align-self: flex-start;

`

const Conclusion = styled.p`

    font-size: 18px;
    line-height: 22px;
    align-self: flex-start;
    margin-bottom: 28px;
    color: #666666;
    flex-wrap: wrap;
    align-self: flex-start;

`