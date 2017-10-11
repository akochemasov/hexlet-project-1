import readlineSync from 'readline-sync';

const answerCorrectLimit = 3;

const init = (getQuestion, getAnswerCorrect) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  const iter = (acc) => {
    if (acc === answerCorrectLimit) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    // const answerCorrect = getAnswerCorrect(question);
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
