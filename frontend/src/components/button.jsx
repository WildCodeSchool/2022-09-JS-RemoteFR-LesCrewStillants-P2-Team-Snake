function Button({ id, selected, type, onClick }) {
  return (
    <div>
      <button id={id} className={selected} onClick={onClick} type="button">
        {type}
      </button>
    </div>
  );
}

export default Button;
