import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => getRndInteger(100);

const isEven = num => num % 2 === 0;
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

const generateTask = () => {
  const question = getQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const game = () => {
  initGame(generateTask, description);
};

export default game;
