import initGame from '..';
import { getRndInteger } from '../utils';

const description = 'What number is missing in this progression?';

const getQuestionAndAnswer = () => {
  const lenRow = 10;
  const startRow = getRndInteger(10);
  const stepRow = getRndInteger(10);
  const rndInRow = getRndInteger(lenRow);

  const iter = (count, answer, question) => {
    if (count === lenRow) {
      return [question, answer];
    }
    const item = startRow + (count * stepRow);
    if (count === rndInRow) {
      return iter(count + 1, item, `${question} ..`);
    }
    return iter(count + 1, answer, `${question} ${item}`);
  };
  return iter(0, 0, '');
};

const generateTask = () => {
  const [question, correctAnswer] = getQuestionAndAnswer();
  return [question, String(correctAnswer)];
};

const game = () => {
  initGame(generateTask, description);
};

export default game;
