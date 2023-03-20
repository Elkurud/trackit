import styled from "styled-components";

const StyledButton = styled.button`

    width: 300px;
    height: 45px;
    background: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 4.5px;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: ${(props) => props.disabled ? "none" : "all"};
    opacity: ${(props) => props.disabled ? 0.7 : 1};

`

export default StyledButton