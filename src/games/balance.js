import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'Balance the given number.';

const getCorrectAnswer = (question) => {
  const arr = question.split('').sort();
  const min = Number(arr[0]);
  const max = Number(arr[arr.length - 1]);
  if (max - min < 2) {
    return arr.join('');
  }
  const diff = Math.round((max - min) / 2);
  if (arr.length < 2) {
    return getCorrectAnswer([min + diff, max - diff].join(''));
  }
  return getCorrectAnswer([min + diff, max - diff, arr.slice(1, arr.length - 1)].join(''));
};

const generateTask = () => {
  const question = `${getRndInteger(100)}`;
  const correctAnswer = String(getCorrectAnswer(question));
  return [question, correctAnswer];
};

const game = () => {
  initGame(generateTask, description);
};

export default game;
