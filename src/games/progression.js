import initGame from '..';
import { getRndInteger } from '../utils';

const descGame = 'What number is missing in this progression?';
let answerCorrect = 0;

const getQuestion = () => {
  const lenRow = 10;
  const startRow = getRndInteger(10);
  const stepRow = getRndInteger(10);
  const rndInRow = getRndInteger(lenRow);

  let question = '';
  for (let i = 0; i < lenRow; i += 1) {
    const item = startRow + (i * stepRow);
    let res = String(item);
    if (i === rndInRow) {
      answerCorrect = item;
      res = '..';
    }
    question = (i === 0) ? `${res}` : `${question} ${res}`;
  }

  return question;
};

const getAnswerCorrect = () => answerCorrect;

const generateTask = () => [getQuestion(), String(getAnswerCorrect())];

const game = () => {
  initGame(generateTask, descGame);
};

export default game;
