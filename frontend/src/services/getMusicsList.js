import extractVideoID from "./getIdYoutube";

const getMusics = (musicsList) => {
  const arrMusicsList = musicsList;
  let allQuestions = [];
  for (let i = 1; i <= 10; i++) {
    const questions = [];
    const rands = Math.floor(Math.random() * arrMusicsList.length);
    const goodAnswers = {
      title: arrMusicsList[rands].title,
      artist: arrMusicsList[rands].artist,
      genre: arrMusicsList[rands].genre,
      extract: extractVideoID(arrMusicsList[rands].extract),
    };
    questions.push(goodAnswers);
    arrMusicsList.splice(rands, 1);

    for (let j = 0; j < 3; j++) {
      const wrongRands = Math.floor(Math.random() * arrMusicsList.length);
      const wrongAnswers = {
        title: arrMusicsList[wrongRands].title,
        artist: arrMusicsList[wrongRands].artist,
      };
      questions.push(wrongAnswers);
      arrMusicsList.splice(wrongRands, 1);
    }
    allQuestions.push(questions);
  }
  return allQuestions;
};

export default getMusics;
