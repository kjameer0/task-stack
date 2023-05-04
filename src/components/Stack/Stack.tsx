import { useState } from 'react';
import { StyledStack } from './StyledStack';
export default function Stack() {
  const [stack, setStack] = useState(['go', 'to', 'work', ',hi', 'lol'] as string[]);
  return (
    <StyledStack>
      <ul>
        {stack.reverse().map((task, idx) => {
          return <li key={idx}>{task}</li>;
        })}
      </ul>
    </StyledStack>
  );
}
