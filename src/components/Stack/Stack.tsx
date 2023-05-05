//react
import { useState, useRef, useEffect } from 'react';
//styles
import { StyledStack } from './StyledStack';
//error-handling
import { getErrorMessage } from 'utils/error-handling/error-utils';
export default function Stack() {
  const inputElement = useRef<HTMLInputElement>(null);
  const [stack, setStack] = useState([
    'define dynamic programming',
    'define memoization',
    'define tabulation',
    'define recursive vs iterative',
    'explain exponential time complexity',
  ] as string[]);
  const [pushText, setPushText] = useState('');
  useEffect(() => {
    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
  function handlePop() {
    setStack((prev) => prev.slice(0, prev.length - 1));
  }
  function handleEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handlePush();
    }
  }
  function handlePush() {
    try {
      if (pushText.length === 0) {
        throw new Error('please add something');
      }
      setStack((prev) => [...prev.slice(0), pushText]);
      setPushText('');
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  }
  return (
    <StyledStack>
      <h1 className="page-title">Task Stack</h1>
      <div className="field-container">
        <button className="button-3" onClick={handlePop}>
          POP
        </button>
        <button className="button-3" onClick={handlePush}>
          PUSH
        </button>
        <input
          ref={inputElement}
          className="push-field"
          onChange={(e) => setPushText(e.target.value)}
          value={pushText}
          placeholder="Add a task!"
          onKeyDown={(e) => handleEnterKey(e)}
        />
      </div>

      <ul>
        {stack
          .slice(0)
          .reverse()
          .map((task, idx) => {
            return <li key={idx}>{task}</li>;
          })}
      </ul>
    </StyledStack>
  );
}
