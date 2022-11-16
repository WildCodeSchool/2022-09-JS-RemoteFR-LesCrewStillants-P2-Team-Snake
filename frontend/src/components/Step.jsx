export default function Step({ selected, index }) {
  return (
    <div className={`stepBlock ${selected ? "inProgress" : ""}`}>
      <div className="circleWrapper">
        <div className="circle">
          <div className="hourglass">{index + 1}</div>
        </div>
      </div>
    </div>
  );
}
