import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function ButtonHome() {
  const hundleClick = () => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    if (confirm("Are you sure you want to return to the homepage ?")) {
      window.location = "/";
    }
  };

  return (
    <div>
      <button onClick={hundleClick} type="button">
        <FontAwesomeIcon icon={faHome} />
      </button>
    </div>
  );
}

export default ButtonHome;
