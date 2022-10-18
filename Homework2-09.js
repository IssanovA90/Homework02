const questionOne = prompt('2+2?');
const questionTwo = prompt('2+3?');
const questionThree = prompt('2+4?');

const answerOne = 4;
const answerTwo = 5;
const answerThree = 6;

let score = 0;

if(questionOne == answerOne && questionTwo == answerTwo && questionThree == answerThree){
    alert("6 балов");}
else if((questionOne !== answerOne && questionTwo == answerTwo && questionThree == answerThree) || (questionOne == answerOne && questionTwo !== answerTwo && questionThree == answerThree) || (questionOne == answerOne && questionTwo == answerTwo && questionThree !== answerThree)){
    alert("4 балов");}
else if((questionOne !== answerOne && questionTwo !== answerTwo && questionThree == answerThree) || (questionOne == answerOne && questionTwo !== answerTwo && questionThree !== answerThree) || (questionOne !== answerOne && questionTwo == answerTwo && questionThree !== answerThree)){
    alert("2 бала");}
else {
    alert("Все неверно")
}




