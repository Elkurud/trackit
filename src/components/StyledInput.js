import styled from "styled-components";

const StyledInput = styled.input`

    width: 303px;
    height: 45px;
    background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
    color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    pointer-events: ${(props) => props.disabled ? "none" : "all"};

    &::placeholder{
        color: #dbdbdb;
    }

`

export default StyledInput