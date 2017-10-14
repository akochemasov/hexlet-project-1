import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getNod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getNod(b, a % b);
};
const getCorrectAnswer = (question) => {
  const [a, b] = question.split(' ');
  return getNod(Number(a), Number(b));
};

const generateTask = () => {
  const question = `${getRndInteger(20)} ${getRndInteger(20)}`;
  const correctAnswer = String(getCorrectAnswer(question));
  return [question, correctAnswer];
};

const game = () => {
  initGame(generateTask, description);
};

export default game;
