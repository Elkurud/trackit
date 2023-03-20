import dayjs from "dayjs";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import apiToday from "../apis/apiToday";
import UserContext from "../contexts/UseContext";
import Frame from "./Frame";
import HabitCard from "./HabitCard";

export default function Today() {

    const weekDays = [
        { "id": 0, "day": "D", name: "Domingo" },
        { "id": 1, "day": "S", name: "Segunda" },
        { "id": 2, "day": "T", name: "Terça" },
        { "id": 3, "day": "Q", name: "Quarta" },
        { "id": 4, "day": "Q", name: "Quinta" },
        { "id": 5, "day": "S", name: "Sexta" },
        { "id": 6, "day": "S", name: "Sábado" }
    ]

    const [habits, setHabits] = useState([])
    const [onOff, setOnOff] = useState(true);

    const { userData, setPercentage, percentage } = useContext(UserContext)

    useEffect((habitRequest))

    function habitRequest() {

        apiToday.todayRequest(userData.token)
            .then(res => {

                const userHabits = res.data
                setHabits(userHabits)

                const checked = userHabits.filter(f => f.done === true)
                userHabits.length > 0 ? (setPercentage((checked.length / userHabits.length) * 100)) : setPercentage(0)
                setOnOff(false)

            })
            .catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })

    }

    return (

        
        <Frame>
            <Title data-test="today" >{weekDays[dayjs().day()].name}, {dayjs().date()}/{dayjs().month() < 10 ? 0 : ""}{dayjs().month()} </Title>
            <Conclusion data-test="today-counter" concluded={percentage} >

                {percentage === 0 ? "Nenhum hábito concluído ainda" : `${percentage}% dos hábitos concluídos`}

            </Conclusion>

            {onOff ? (
                <ThreeDots height={80} width={80} color={"#126ba5"}/>
            ) : (
                habits.length === 0 ? (
                    <Conclusion concluded={percentage} >Você ainda não possui nenhum hábito cadastrado hoje</Conclusion>
                ) : (

                    habits.map(f => (
                        <HabitCard
                            data-test="today-habit-container"
                            currentSequence={f.currentSequence}
                            done={f.done}
                            habitRequest={habitRequest}
                            highestSequence={f.highestSequence}
                            id={f.id}
                            name={f.name}
                        />
                    ))

                )
            )}

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
    color: ${(props) => props.concluded === 0 ? '#bababa' : "#8fc549" }

`