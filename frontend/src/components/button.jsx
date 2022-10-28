/* eslint-disable react/button-has-type */
// eslint-disable-next-line react/prop-types
function Button({ id, className, type, onClick }) {
  return (
    <div>
      <button id={id} className={className} type={type} onClick={onClick}>
        {type}
      </button>
    </div>
  );
}

export default Button;
