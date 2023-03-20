import GlobalStyle from "./styles/GlobalStyle";
import styled from 'styled-components';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import UserContext from "./contexts/UseContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Today from "./components/Today";
import Habit from "./components/Habit";



function App() {
  
  const [userData, setUserData] = React.useState({})
  const [percentage, setPercentage] = React.useState(0)

  return (

  <BrowserRouter>
    <UserContext.Provider value={{ userData, setUserData, percentage, setPercentage }}>
      <GlobalStyle/>
      <Global>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habit />} />
        </Routes>
      </Global>
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;

const Global = styled.div`

  width: 375px;

`