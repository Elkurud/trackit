import { useContext } from "react"
import styled from "styled-components"
import apiToday from "../apis/apiToday"
import UserContext from "../contexts/UseContext"
import check from "../assets/check.svg"


export default function HabitCard({ currentSequence, done, habitRequest, highestSequence, id, name }) {

    const { userData } = useContext(UserContext)

    const coloring = {

        color: currentSequence === highestSequence && currentSequence > 0 ? '#8fc549' : "#666666"

    }

    function checkers() {

        done ? (
            apiToday.uncheck(userData.token, id)
                .then(() => habitRequest())
                .catch((err) => alert(err.response.data.message))
        ) : (
            apiToday.check(userData.token, id)
                .then(() => habitRequest())
                .catch((err) => alert(err.response.data.message))
        )

    }

    return(

        <Card>
            <Title data-test="today-habit-name" >{name}</Title>
            <Sequences>

                Sequência atual:<p style={coloring} data-test="today-habit-sequence" >{currentSequence} dias</p><br/>
                Seu recorde:<p style={coloring} data-test="today-habit-record" >{highestSequence} dias</p>
                    
            </Sequences>

            <CheckMark done={done} onClick={() => {checkers()}} data-test="today-habit-check-btn" >
                <img src={check} alt=""/>
            </CheckMark>

        </Card>

    )


}

const Card = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    height: 94px;
    width: 339px;
    margin: 0px 18px;
    padding: 13px;
    margin-bottom: 10px;
    border-radius: 5px;

`

const Title = styled.p`

    font-weight: 400;
    size: 20px;
    line-height: 25px;
    color: #666666;

`

const Sequences = styled.div`

    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: #666666;

`

const CheckMark = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 69px;
    background-color: ${(props) => props.done ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;

`