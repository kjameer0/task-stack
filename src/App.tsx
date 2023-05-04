import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import styled, { createGlobalStyle, css } from 'styled-components';
import { Outlet } from 'react-router-dom';

function App() {
  return <Outlet />;
}

export default App;
