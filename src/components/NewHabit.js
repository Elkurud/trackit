import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import apiHabit from "../apis/apiHabit"
import UserContext from "../contexts/UseContext"
import StyledInput from "./StyledInput"
import Week from "./Week"

export default function NewHabit({ newHabit, setNewHabit, habitListRequest }) {

    const [cardData, setCardData] = useState({ name: "" })
    const [days, setDays] = useState([])
    const [onOff, setOnOff] = useState(false)
    const { userData } = useContext(UserContext)

    function cardInfo(e) {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }

    function create(e) {
        e.preventDefault()
        setOnOff(true)

        const body = { ...cardData, days }
        apiHabit.createHabit(userData.token, body)
            .then(res => {
                setOnOff(false)
                setCardData({ name: "" })
                setDays([])
                setNewHabit(false)
                habitListRequest()
            })
            .catch(err => {
                setOnOff(false)
                alert(err.response.data.message)
            })
    }

    return(
        <CardData newHabit={newHabit} onSubmit={create} >
            <div>
                <StyledInput
                    data-test="habit-name-input"
                    name="name"
                    placeholder="nome do hábito"
                    type="text"
                    required
                    disabled={onOff}
                    value={cardData.name}
                    onChange={cardInfo}
                />
                <Week
                    selectedDays={days}
                    setSelectedDays={setDays}
                    onOff={onOff}
                />
            </div>

            <Buttons>
                <Cancel
                    data-test="habit-create-cancel-btn"
                    type="button"
                    disabled={onOff}
                    onClick={() => setNewHabit(false)}
                >
                    Cancelar
                </Cancel>

                <Save
                    data-test="habit-create-save-btn"
                    type="submit"
                    disabled={onOff}
                >
                    {onOff ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Salvar"}
                </Save>

            </Buttons>

        </CardData>
    )


}

const CardData = styled.form`

    width: 340px;
    height: 180px;
    display: ${(props) => props.newHabit ? "initial" : "none" };
    margin-bottom: 5px;
    padding: 18px;
    background-color: #ffffff;
    border-radius: 5px;

`

const Buttons = styled.div`

    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

const Cancel = styled.button`

    width: 85px;
    height: 35px;
    font-size: 16px;
    line-height: 20px;
    background-color: transparent;
    border-radius: 4px;
    color: #52B6FF;
    border: none;
    pointer-events: ${(props) => props.onOff ? "none" : "all"};
    margin-top: 29px;

`

const Save = styled.button`

    width: 84px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #52B6FF;
    color: #FFFFFF;
    opacity: ${(props) => props.onOff ? 0.7 : 1};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    line-height: 20px;
    pointer-events: ${(props) => props.onOff ? "none" : "all"};
    margin-top: 29px;

`