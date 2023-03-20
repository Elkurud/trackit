import { useState, useEffect, useContext } from "react"
import apiHabit from "../apis/apiHabit"
import apiToday from "../apis/apiToday"
import Frame from "./Frame";
import styled from "styled-components";
import UserContext from "../contexts/UseContext";
import plus from "../assets/plus.svg"
import NewHabit from "./NewHabit";
import { ThreeDots } from "react-loader-spinner";
import HabitCard from "./HabitCard";
import EditCard from "./EditCard";

export default function Habit() {

    const [habits, setHabits] = useState([]);
    const [onOff, setOnOff] = useState(true);
    const [newHabit, setNewHabit] = useState(false);
    const { userData, setPercentage } = useContext(UserContext);


    useEffect(habitListRequest, [])

    function habitRequest() {

        apiToday.todayRequest(userData.token)
            .then(res => {

                const userHabits = res.data
                setHabits(userHabits)

                const checked = userHabits.filter(f => f.done === true)
                userHabits > 0 ? (setPercentage((checked.length / userHabits.length) * 100)) : setPercentage(0)
                setOnOff(false)

            })
            .catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })

    }

    function habitListRequest() {
        apiHabit.getHabit(userData.token)
            .then(res => {
                setOnOff(false)
                setHabits(res.data)
            })
            .catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })
    }

    return (

        <Frame>
            <Container>
                <Title>Meus hábitos</Title>
                <Button onClick={() => {setNewHabit(!newHabit)}} data-test="habit-create-btn" >
                        <img src={plus} alt="" />
                </Button>
            </Container>

            <NewHabit
                data-test="habit-create-container"
                newHabit={newHabit}
                setNewHabit={setNewHabit}
                habitListRequest={habitListRequest}
            />

            {onOff ? (
                <ThreeDots height={80} width={80} color={"#126ba5"} />
            ) : (
                habits.length === 0 ? (
                    <Conclusion>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </Conclusion>
                ) : (
                    habits.map(f => (
                        <EditCard
                            days={f.days}
                            id={f.id}
                            key={f.id}
                            name={f.name}
                            habitListRequest={habitListRequest}
                        />
                    ))
                )
            )}


        </Frame>

    )

}

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 340px;

`
const Title = styled.p`

    font-size: 22px;
    line-height: 29px;
    color: #126BA5; 
    align-self: flex-start;

`

const Button = styled.button`

    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 5px;
    border: 0px;

`

const Conclusion = styled.p`

    font-size: 18px;
    line-height: 22px;
    align-self: flex-start;
    margin-bottom: 28px;
    color: ${(props) => props.concluded === 0 ? '#bababa' : "#8fc549" }

`