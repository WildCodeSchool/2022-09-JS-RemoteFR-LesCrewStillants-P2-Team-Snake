import "../Step_progress.css";

export default function Step({ selected, index }) {
  return (
    <div className={`stepBlock + ${selected ? " selected" : ""}`}>
      <div className="circleWrapper">
        <div className="circle">{index + 1}</div>
      </div>
    </div>
  );
}
