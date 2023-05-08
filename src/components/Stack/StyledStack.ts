import styled, { css } from 'styled-components';
export const StyledStack = styled.div`
  //border: 1px solid red;
  h1 {
    // border: 1px solid red;
    margin: 0;
  }
  ul {
    background-color: rgb(150, 150, 150);
    list-style-type: none;
    padding: 0;
  }
  li {
    border: 5px solid black;
    background-color: rgb(0, 50, 255);
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    /* box-shadow: 6px -160px teal; */
  }
  .push-field {
    width: 20rem;
    height: 2rem;
    font-size: 1.2rem;
  }
`;
