import readlineSync from 'readline-sync';

const answerCorrectLimit = 3;

const init = (generateTask) => {
  const [getQuestion, getAnswerCorrect, desc] = generateTask();

  console.log('Welcome to the Brain Games!');
  console.log(desc);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('');
  const iter = (acc) => {
    if (acc === answerCorrectLimit) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    const answerCorrect = getAnswerCorrect(question);
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

export default init;
