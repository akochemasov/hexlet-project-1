import initGame from '..';
import { getRndInteger } from '../utils';

const descGame = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestion = () => `${getRndInteger(10)} ${operations[getRndInteger(operations.length)]} ${getRndInteger(10)}`;

const getAnswerCorrect = (question) => {
  const [a, operation, b] = question.split(' ');
  const num1 = Number(a);
  const num2 = Number(b);
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
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
