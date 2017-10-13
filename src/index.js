import readlineSync from 'readline-sync';

const gamesCount = 3;

const initGame = (generateTask, descGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(descGame);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('');
  const iter = (acc) => {
    if (acc === gamesCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [question, answerCorrect] = generateTask();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
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

export default initGame;
