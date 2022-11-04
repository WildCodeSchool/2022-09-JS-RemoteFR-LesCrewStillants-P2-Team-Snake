function Button({ id, selected, type, onClick }) {
  // console.warn("Button");
  return (
    <div>
      <button id={id} className={selected} onClick={onClick} type="button">
        {type}
      </button>
    </div>
  );
}

export default Button;
