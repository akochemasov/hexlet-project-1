import initGame from '..';
import { getRndInteger } from '../utils';

const descGame = 'Balance the given number.';

const getQuestion = () => `${getRndInteger(100)}`;

const isPrime = (num) => {
  if (num < 3) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i < Math.round(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getAnswerCorrect = question => (isPrime(Number(question)) ? 'yes' : 'no');

const generateTask = () => {
  const question = getQuestion();
  const answerCorrect = String(getAnswerCorrect(question));
  return [question, answerCorrect];
};

const game = () => {
  initGame(generateTask, descGame);
};

export default game;
