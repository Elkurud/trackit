import GlobalStyle from "./styles/GlobalStyle";
import styled from 'styled-components';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import UserContext from "./contexts/UseContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Today from "./components/Today";



function App() {
  
  const [userData, setUserData] = React.useState({})

  return (

  <BrowserRouter>
    <UserContext.Provider value={{ userData, setUserData }}>
      <GlobalStyle/>
      <Global>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<Today />} />
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