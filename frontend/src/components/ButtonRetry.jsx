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
        Retry
      </button>
    </div>
  );
}

export default ButtonRetry;
