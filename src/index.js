import readlineSync from 'readline-sync';

const questionUserName = () => {
    console.log('Welcome to the Brain Games!');
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
}

export default questionUserName;