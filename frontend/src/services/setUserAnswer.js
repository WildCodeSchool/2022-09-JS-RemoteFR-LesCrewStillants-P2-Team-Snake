function setUserAnswer(gameConfigurations, e, currentStep) {
  const userAnswer = [];

  if (
    e !== "" &&
    `${gameConfigurations[currentStep - 1][0].artist} - ${
      gameConfigurations[currentStep - 1][0].title
    }` == e.currentTarget.innerHTML.toString()
  ) {
    userAnswer.push({
      goodAnswer: true,
      answer: e.currentTarget.innerHTML.toString(),
    });
  } else {
    const userAnswerCheck =
      e === "" ? "TIMEOUT" : e.currentTarget.innerHTML.toString();
    userAnswer.push({
      goodAnswer: false,
      answer: userAnswerCheck,
    });
  }

  if (localStorage.gameUserAnswer === undefined) {
    localStorage.setItem("gameUserAnswer", JSON.stringify(userAnswer));
  } else {
    const arr = JSON.parse(localStorage.getItem("gameUserAnswer"));
    arr.push(userAnswer[0]);
    localStorage.setItem("gameUserAnswer", JSON.stringify(arr));
  }
  return userAnswer;
}

export default setUserAnswer;
