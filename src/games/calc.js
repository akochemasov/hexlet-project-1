import init from '..';

const operations = ['+', '-', '*'];

const getRndInteger = () => Math.floor(Math.random() * 5) + 1;
const getRndOperation = () => operations[Math.floor(Math.random() * operations.length)];
const getQuestion = () => `${getRndInteger()} ${getRndOperation()} ${getRndInteger()}`;

const getAnswer = (question) => {
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
      return undefined;
  }
};

const getAnswerCorrect = question => String(getAnswer(question));

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  init(getQuestion, getAnswerCorrect);
};

export default brainEven;
