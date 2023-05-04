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
  body {
    background-color: ${(props) => props.theme.colors.main}
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
