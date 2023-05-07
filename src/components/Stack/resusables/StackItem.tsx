export default function StackItem({ idx, task }: { idx: number; task: string }) {
  return (
    <li className="card">
      <div className="content">{task}</div>
    </li>
  );
}
