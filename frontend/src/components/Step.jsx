export default function Step({ selected, label }) {
  return (
    <div className="stepBlock">
      <div className="circleWrapper">
        <div className="circle">
          <div className="hourglass">{selected ? "⏳" : label}</div>
        </div>
      </div>
    </div>
  );
}
