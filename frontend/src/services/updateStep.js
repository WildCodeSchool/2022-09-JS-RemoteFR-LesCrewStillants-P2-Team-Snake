const updateStep = (
  step,
  updateCurrentStep,
  setCurrentVideo,
  setButtonPositionArray,
  gameConfigurations,
  setButtonPosition
) => {
  updateCurrentStep(step);
  if (step <= 10) {
    setCurrentVideo(gameConfigurations[step - 1][0].extract);
  }
  setButtonPositionArray(setButtonPosition());
};

export default updateStep;
