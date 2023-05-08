import { useRef } from 'react';
import styled from 'styled-components';
import { selectColor } from 'utils/style-utils';
interface StyledItemProps {
  isBlue: boolean;
  idx: number;
}

const StyledItem = styled.li<StyledItemProps>`
  border: 3px solid black;
  background-color: ${(props) => selectColor(props.idx)};
  padding: 1.5rem 0rem;
  text-align: center;
  //border-radius: 10%;
  font-size: 2rem;
  /* box-shadow: 6px -160px teal; */
`;
export default function StackItem({
  idx,
  task,
  isBlue,
}: {
  idx: number;
  task: string;
  isBlue: boolean;
}) {
  const itemRef = useRef<HTMLLIElement>(null);
  return (
    <StyledItem ref={itemRef} isBlue={isBlue} idx={idx} className="card">
      <div className="content">{task}</div>
    </StyledItem>
  );
}
