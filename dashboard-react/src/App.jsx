import React from "react";
import Dashboard from "./components/Dashboard";
import styled from "styled-components";


const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1c1c1c;
  padding: 16px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const App = () => {
  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
};

export default App;
