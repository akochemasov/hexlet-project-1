import readlineSync from 'readline-sync';

const CORRECT_ANSWER_LIMIT = 3;
let userName = '';

// brain-game
const getUserNameForGames = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

// brain-even
const getUserNameForEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

const isEvenNumber = num => num % 2 === 0;

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const isCorrectAnswer = (question, answer) => {
  let result = false;
  const isEven = isEvenNumber(question);
  if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`"yes" is wrong answer ;(. Correct answer was "no".
    Let's try again, ${userName}!`);
  }
  return result;
};

const getRndIntNumber = () => Math.floor(Math.random() * 100) + 1;

const startBrainEven = (correctAnswerCount) => {
  const question = getRndIntNumber();
  const answer = getUserAnswer(question);
  if (isCorrectAnswer(question, answer)) {
    const count = correctAnswerCount + 1;
    if (count === CORRECT_ANSWER_LIMIT) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      startBrainEven(count);
    }
  }
};
const brainEven = () => {
  getUserNameForEven();

  startBrainEven(0);
};

export { getUserNameForGames, brainEven };
