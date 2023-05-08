//react
import { useState, useRef, useEffect } from 'react';
//styles
import { StyledStack } from './StyledStack';
//components
import StackItem from './resusables/StackItem';
//error-handling
import { getErrorMessage } from 'utils/error-handling/error-utils';
export default function Stack() {
  const inputElement = useRef<HTMLInputElement>(null);
  const [stack, setStack] = useState([
    'define dynamic programming',
    'define memoization',
    'explain exponential time complexity',
    'define dynamic programming',
    'define memoization',
    'define tabulation',
    'define recursive vs iterative',
  ] as string[]);
  const [pushText, setPushText] = useState('');
  useEffect(() => {
    //if input element ref exists focus that element on mount
    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
  function handlePop() {
    //copy all but the last element in the array
    setStack((prev) => prev.slice(0, prev.length - 1));
  }
  function handleEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    //check for which key was pressed, if its enter push current text\
    //in input field
    if (event.key === 'Enter') {
      handlePush();
    }
  }
  function handlePush() {
    try {
      //if no text throw error
      if (pushText.length === 0) {
        throw new Error('please add something');
      }
      //add new val onto top of previous stack
      setStack((prev) => [...prev.slice(0), pushText]);
      //clear field
      setPushText('');
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  }
  return (
    <StyledStack>
      <h1 className="page-title">Task Stack</h1>
      <div className="field-container">
        <input
          ref={inputElement}
          className="push-field"
          onChange={(e) => setPushText(e.target.value)}
          value={pushText}
          placeholder="Add a task!"
          onKeyDown={(e) => handleEnterKey(e)}
        />
        <button className="button-3" onClick={handlePush}>
          PUSH
        </button>
        <button className="button-3 pop-button" onClick={handlePop}>
          POP
        </button>
      </div>

      <ol>
        {/* take stack, copy it and reverse it to build
        stack on screen without altering original state */}
        {stack
          .slice(0)
          .reverse()
          .map((task, idx) => {
            return <StackItem key={idx} idx={idx} isBlue={true} task={task} />;
          })}
      </ol>
    </StyledStack>
  );
}
