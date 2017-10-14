import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivisor = Math.sqrt(num);
  const iter = (divisor) => {
    if (divisor > maxDivisor) {
      return true;
    }
    if (num % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};
const getCorrectAnswer = question => (isPrime(Number(question)) ? 'yes' : 'no');

const generateTask = () => {
  const question = `${getRndInteger(100)}`;
  const correctAnswer = getCorrectAnswer(question);
  return [question, String(correctAnswer)];
};

const game = () => {
  initGame(generateTask, description);
};

export default game;
