import init from '..';

const desc = 'Find the greatest common divisor of given numbers.';

const getRndInteger = () => Math.floor(Math.random() * 20) + 1;
const getQuestion = () => `${getRndInteger()} ${getRndInteger()}`;

const getNod = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getNod(b, a % b);
};
const getAnswer = (question) => {
  const [a, b] = question.split(' ');
  return getNod(Number(a), Number(b));
};

const getAnswerCorrect = question => String(getAnswer(question));

const generateTask = () => [getQuestion, getAnswerCorrect, desc];

const game = () => {
  init(generateTask);
};

export default game;
