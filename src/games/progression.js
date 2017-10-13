import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'What number is missing in this progression?';
let correctAnswer = '';

const getQuestion = () => {
  const lenRow = 10;
  const startRow = getRndInteger(10);
  const stepRow = getRndInteger(10);
  const rndInRow = getRndInteger(lenRow);

  const iter = (count, acc) => {
    if (count === lenRow) {
      return acc;
    }
    const item = startRow + (count * stepRow);
    if (count === rndInRow) {
      correctAnswer = item;
      return iter(count + 1, `${acc} ..`);
    }
    return iter(count + 1, `${acc} ${item}`);
  };
  return iter(0, '');
};

const getCorrectAnswer = () => correctAnswer;

const generateTask = () => [getQuestion(), String(getCorrectAnswer())];

const game = () => {
  initGame(generateTask, description);
};

export default game;
