import styled, { css } from 'styled-components';
export const StyledStack = styled.div`
  h1 {
    text-align: left;
    margin: auto auto 2rem auto;
  }
  ol {
    list-style-type: none;
    padding: 0;
  }
  .field-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .field-container > * {
    margin-right: 1rem;
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
  .move {
    background: red;
    transform: translate(-100%);
  }
`;
