import { useContext } from "react"
import styled from "styled-components"
import apiHabit from "../apis/apiHabit"
import UserContext from "../contexts/UseContext"
import WeekDays from "./Week"
import trashCan from "../assets/dump.svg"


export default function EditCard({ id, name, days, habitListRequest }) {
    const { userData } = useContext(UserContext)

    function deleteCard() {
        const confirmation = window.confirm("Tem certeza que deseja deletar esse hábito?")

        if (confirmation) {
            apiHabit.deleteHabit(userData.token, id)
                .then(res => {
                    habitListRequest()
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        }

    }

    return (
        <Container>
            <Title>{name}</Title>
            <WeekDays selectedDays={days} />
            <img src={trashCan} onClick={deleteCard} alt="" />
        </Container>
    )
}

const Container = styled.div`

    background-color: #FFFFFF;
    height: 94px;
    width: 339px;
    margin: 5px 0px;
    padding: 13px;
    border-radius: 5px;
    position: relative;

    img {
        height: 15;
        width: 13px;
        position: absolute;
        top: 11px;
        right: 10px;
    }

`

const Title = styled.p`

    font-weight: 400;
    size: 20px;
    line-height: 25px;
    color: #666666;

`