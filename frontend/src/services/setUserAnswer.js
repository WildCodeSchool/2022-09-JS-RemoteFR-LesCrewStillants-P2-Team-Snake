function setUserAnswer(gameConfigurations, e, currentStep) {
  const userAnswer = [];

  if (
    `${gameConfigurations[currentStep - 1][0].artist} - ${gameConfigurations[currentStep - 1][0].title
    }` == e.currentTarget.innerHTML.toString()
  ) {
    userAnswer.push({
      goodAnswer: true,
      answer: e.currentTarget.innerHTML.toString(),
    });
  } else {
    userAnswer.push({
      goodAnswer: false,
      answer: e.currentTarget.innerHTML.toString(),
    });
  }
  return userAnswer;
}

export default setUserAnswer;
