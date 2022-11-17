function setStepBar(labelArray, gameConfigurations, e, currentStep) {
  let tryStep = labelArray;
  if (e === "") {
    tryStep[currentStep - 1] = "❌";
    return tryStep;
  }
  if (
    `${gameConfigurations[currentStep - 1][0].artist} - ${
      gameConfigurations[currentStep - 1][0].title
    }` == e.currentTarget.innerHTML.toString()
  ) {
    tryStep[currentStep - 1] = "✅";
  } else {
    tryStep[currentStep - 1] = "❌";
  }
  return tryStep;
}

export default setStepBar;
