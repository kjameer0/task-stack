import { useRef, forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components';
import { selectColor } from 'utils/style-utils';
import { CSSTransition } from 'react-transition-group';

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
function StackItem(
  { idx, task, isBlue }: { idx: number; task: string; isBlue: boolean },
  ref: ForwardedRef<HTMLLIElement>
) {
  return (
    <StyledItem ref={ref} isBlue={isBlue} idx={idx} className="card">
      <div className="content">{task}</div>
    </StyledItem>
  );
}
export default forwardRef(StackItem);
