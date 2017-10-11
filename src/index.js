import readlineSync from 'readline-sync';

const answerCorrectLimit = 3;

// brain-game
const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

// brain-even
const isEvenNumber = num => num % 2 === 0;

const getRndIntNumber = () => Math.floor(Math.random() * 100) + 1;

const startBrainEven = (userName, answerCorrectCount) => {
  if (answerCorrectCount === answerCorrectLimit) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const question = getRndIntNumber();
  console.log(`Question: ${question}`);
  const answerUser = readlineSync.question('Your answer: ');
  const answerCorrect = isEvenNumber(question) ? 'yes' : 'no';
  let count = answerCorrectCount;
  if (answerUser === answerCorrect) {
    console.log('Correct!');
    count = answerCorrectCount + 1;
    startBrainEven(userName, count);
  } else {
    console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerCorrect}".
    Let's try again, ${userName}!`);
  }
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  startBrainEven(userName, 0);
};

// export
export { getUserName, brainEven };
