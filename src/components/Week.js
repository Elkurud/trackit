import styled from "styled-components"


export default function WeekDays({ selectedDays, setSelectedDays, onOff }) {

    const weekDays = [
        { "id": 0, "day": "D", name: "Domingo" },
        { "id": 1, "day": "S", name: "Segunda" },
        { "id": 2, "day": "T", name: "Terça" },
        { "id": 3, "day": "Q", name: "Quarta" },
        { "id": 4, "day": "Q", name: "Quinta" },
        { "id": 5, "day": "S", name: "Sexta" },
        { "id": 6, "day": "S", name: "Sábado" }
    ]



    function handleDay(day) {
        if (selectedDays.includes(day)) {
            const newDays = selectedDays.filter(f => f !== day)
            setSelectedDays(newDays)
        } else {
            setSelectedDays([...selectedDays, day])
        }
    }

    return (
        <WeekDay onOff={onOff}>
            {weekDays.map(weekDay => (
                <StyledDay
                    isSelected={selectedDays.includes(weekDay.id)}
                    onClick={() => handleDay(weekDay.id)}
                    key={weekDay.id}
                >
                    {weekDay.day}
                </StyledDay>
            ))}
        </WeekDay>
    )
}


const WeekDay = styled.div`

    display: flex;
    align-items: center;
    gap: 4px;
    pointer-events: ${(props) => props.onOff ? "none" : "all"};

`

const StyledDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 25px;
  padding-bottom: 2px;
  margin-top: 8px;
  border: ${(props) => props.isSelected ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
  border-radius: 5px;
  background: ${(props) => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
  color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
`