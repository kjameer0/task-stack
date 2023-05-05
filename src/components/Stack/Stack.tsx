import { useState } from 'react';
import { StyledStack } from './StyledStack';
export default function Stack() {
  const [stack, setStack] = useState([
    'define dynamic programming',
    'define memoization',
    'define tabulation',
    'define recursive vs iterative',
    'explain exponential time complexity',
  ] as string[]);
  function handlePop() {
    setStack((prev) => prev.slice(0, prev.length - 1));
  }
  return (
    <StyledStack>
      <h1 className="page-title">Task Stack</h1>
      <button onClick={handlePop}>POP</button>
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
