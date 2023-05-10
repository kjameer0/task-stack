//react
import { useState, useRef, useEffect, forwardRef } from 'react';
//styles
import { StyledStack } from './StyledStack';
import { CSSTransition } from 'react-transition-group';
//components
import StackItem from './resusables/StackItem';
//error-handling
import { getErrorMessage } from 'utils/error-handling/error-utils';
export default function Stack() {
  const inputElement = useRef<HTMLInputElement>(null);
  const topItem = useRef<HTMLLIElement>(null);
  const [stack, setStack] = useState([] as string[]);
  const [pushText, setPushText] = useState('');
  useEffect(() => {
    //if input element ref exists focus that element on mount
    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  function handlePop() {
    //copy all but the last element in the array
    //topItem.current?.classList.toggle('move');
    //topItem.current?.remove();
    console.log(stack.length);
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
  console.log(topItem);
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
            return (
              <StackItem
                key={idx}
                idx={idx}
                isBlue={true}
                ref={idx === stack.length - 1 ? topItem : null}
                task={task}
              />
            );
          })}
      </ol>
    </StyledStack>
  );
}
