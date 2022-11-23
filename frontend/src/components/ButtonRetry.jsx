import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

function ButtonRetry() {
  const hundleClick = () => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    if (confirm("Do you really want to restart the game ?")) {
      window.location = "/answer";
    }
  };

  return (
    <div>
      <button onClick={hundleClick} type="button">
        <FontAwesomeIcon icon={faRepeat} />
      </button>
    </div>
  );
}

export default ButtonRetry;
