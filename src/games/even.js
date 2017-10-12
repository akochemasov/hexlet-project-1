import init from '..';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const getRndInteger = () => Math.floor(Math.random() * 100) + 1;
const getQuestion = () => getRndInteger();

const isEven = num => num % 2 === 0;
const getAnswerCorrect = question => (isEven(question) ? 'yes' : 'no');

const generateTask = () => {
  const question = getQuestion();
  const answerCorrect = getAnswerCorrect(question);
  return [question, answerCorrect];
};

const game = () => {
  init(generateTask, desc);
};

export default game;
