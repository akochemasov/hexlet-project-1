import initGame from '..';
import { getRndInteger } from '../utils';

const descGame = 'Balance the given number.';

const getQuestion = () => `${getRndInteger(100)}`;

const getAnswerCorrect = (question) => {
  const arr = question.split('').sort();
  const min = Number(arr[0]);
  const max = Number(arr[arr.length - 1]);
  if (max - min < 2) {
    return arr.join('');
  }
  const diff = Math.round((max - min) / 2);
  if (arr.length < 2) {
    return getAnswerCorrect([min + diff, max - diff].join(''));
  }
  return getAnswerCorrect([min + diff, max - diff, arr.slice(1, arr.length - 1)].join(''));
};

const generateTask = () => {
  const question = getQuestion();
  const answerCorrect = String(getAnswerCorrect(question));
  return [question, answerCorrect];
};

const game = () => {
  initGame(generateTask, descGame);
};

export default game;
