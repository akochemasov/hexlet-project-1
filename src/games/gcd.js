import init from '..';

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

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  init(getQuestion, getAnswerCorrect);
};

export default brainGcd;
