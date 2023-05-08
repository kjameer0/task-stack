import { useRef } from 'react';
export default function StackItem({ idx, task }: { idx: number; task: string }) {
  const itemRef = useRef<HTMLLIElement>(null);
  return (
    <li ref={itemRef} className="card">
      <div className="content">{task}</div>
    </li>
  );
}
