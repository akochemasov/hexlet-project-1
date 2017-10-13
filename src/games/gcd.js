import initGame from '..';
import { getRndInteger } from '../utils';

const descGame = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => `${getRndInteger(20)} ${getRndInteger(20)}`;

const getNod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getNod(b, a % b);
};
const getAnswerCorrect = (question) => {
  const [a, b] = question.split(' ');
  return getNod(Number(a), Number(b));
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
