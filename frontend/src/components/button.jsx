/* eslint-disable react/button-has-type */
// eslint-disable-next-line react/prop-types
function Button({ id, selected, type, onClick }) {
  return (
    <div>
      <button id={id} className={selected} type={type} onClick={onClick}>
        {type}
      </button>
    </div>
  );
}

export default Button;
