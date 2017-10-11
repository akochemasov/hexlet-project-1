import readlineSync from 'readline-sync';

const answerCorrectLimit = 3;

const isEvenNumber = num => num % 2 === 0;

const getRndIntNumber = () => Math.floor(Math.random() * 100) + 1;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  const iter = (acc) => {
    if (acc === answerCorrectLimit) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getRndIntNumber();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    const answerCorrect = isEvenNumber(question) ? 'yes' : 'no';
    if (answerUser === answerCorrect) {
      console.log('Correct!');
      iter(acc + 1);
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerCorrect}".
      Let's try again, ${userName}!`);
    }
  };
  iter(0);
};

export default brainEven;
