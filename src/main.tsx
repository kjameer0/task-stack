import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//components
import { ErrorPage } from 'ErrorPage';
import Stack from 'components/Stack/Stack';
//context
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme } from 'theme';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
//router declaration
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Stack />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
//global styles
const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  body {
    background-color: ${(props) => props.theme.colors.main}
  }
  h1 {
    font-size: 4rem;
  }

/* CSS */
.button-3 {
  appearance: auto;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
