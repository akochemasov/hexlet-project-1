import init from '..';

const getRndInteger = () => Math.floor(Math.random() * 100) + 1;
const getQuestion = () => getRndInteger();

const isEven = num => num % 2 === 0;

const getAnswerCorrect = question => (isEven(question) ? 'yes' : 'no');

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  init(getQuestion, getAnswerCorrect);
};

export default game;
