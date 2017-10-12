import init from '..';

const desc = 'Balance the given number.';

const getRndInteger = () => Math.floor(Math.random() * 1000) + 1;
const getQuestion = () => `${getRndInteger()}`;

const getAnswer = (question) => {
  const arr = question.split('').sort();
  const min = Number(arr[0]);
  const max = Number(arr[arr.length - 1]);
  if (max - min < 2) {
    return arr.join('');
  }
  const diff = Math.round((max - min) / 2);
  if (arr.length < 2) {
    return getAnswer([min + diff, max - diff].join(''));
  }
  return getAnswer([min + diff, max - diff, arr.slice(1, arr.length - 1)].join(''));
};
const getAnswerCorrect = question => String(getAnswer(question));

const generateTask = () => {
  const question = getQuestion();
  const answerCorrect = getAnswerCorrect(question);
  return [question, answerCorrect];
};

const game = () => {
  init(generateTask, desc);
};

export default game;
