import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

const generateTask = () => {
  const question = getRndInteger(100);
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const game = () => {
  initGame(generateTask, description);
};

export default game;
