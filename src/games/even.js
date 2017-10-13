import initGame from '..';
import { getRndInteger } from '../utils';

const descGame = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => getRndInteger(100);

const isEven = num => num % 2 === 0;
const getAnswerCorrect = question => (isEven(question) ? 'yes' : 'no');

const generateTask = () => {
  const question = getQuestion();
  const answerCorrect = getAnswerCorrect(question);
  return [question, answerCorrect];
};

const game = () => {
  initGame(generateTask, descGame);
};

export default game;
