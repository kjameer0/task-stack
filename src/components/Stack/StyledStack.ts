import styled, { css } from 'styled-components';
export const StyledStack = styled.div`
  //border: 1px solid red;
  h1 {
    // border: 1px solid red;
    text-align: left;
    margin: 0;
  }
  ol {
    //background-color: rgb(150, 150, 150);
    list-style-type: none;
    padding: 0;
  }
  .field-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .pop-button {
    margin-left: 2rem;
    background: red;
  }
  .push-field {
    width: 20rem;
    height: 2rem;
    font-size: 1.2rem;
  }
`;
