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
  button {
    background-color: white;
    font-size: 30px;
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
