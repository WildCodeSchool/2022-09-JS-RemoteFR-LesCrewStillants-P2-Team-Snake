import extractVideoID from "./getIdYoutube";

const getMusics = (musicsList) => {
  let allQuestions = [];
  for (let i = 1; i <= 10; i++) {
    const questions = [];
    const rands = Math.floor(Math.random() * musicsList.length);
    const goodAnswers = {
      title: musicsList[rands].title,
      artist: musicsList[rands].artist,
      genre: musicsList[rands].genre,
      extract: extractVideoID(musicsList[rands].extract),
    };
    questions.push(goodAnswers);
    for (let j = 0; j < 3; j++) {
      const wrongRands = Math.floor(Math.random() * musicsList.length);
      const wrongAnswers = {
        title: musicsList[wrongRands].title,
        artist: musicsList[wrongRands].artist,
      };
      questions.push(wrongAnswers);
      musicsList.splice(wrongRands, 1);
    }
    allQuestions.push(questions);
    musicsList.splice(rands, 1);
  }
  return allQuestions;
};

export default getMusics;
