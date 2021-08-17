function addAndDeleteAnswer1() {
  let articleChildArray = question1.childNodes;
  let answer = articleChildArray[3];
  // the response array classes css
  let answerClass = answer.classList;
  let question = articleChildArray[1];
  let questionChilds = question.childNodes;
  let span = questionChilds[1];

  console.log(answer);
  console.log(answerClass);

  if (answerClass.length === 1) {
    answer.classList.add("response-appear");
    span.classList.add("arrow-reverse");
    question.classList.add("bold-question");
  } else {
    answer.classList.remove("response-appear");
    span.classList.remove("arrow-reverse");
    question.classList.remove("bold-question");
  }
}
function addAndDeleteAnswer2() {
  let articleChildArray = question2.childNodes;
  let answer = articleChildArray[3];
  // the response array classes css
  let answerClass = answer.classList;
  let question = articleChildArray[1];
  let questionChilds = question.childNodes;
  let span = questionChilds[1];

  console.log(answer);
  console.log(answerClass);

  if (answerClass.length === 1) {
    answer.classList.add("response-appear");
    span.classList.add("arrow-reverse");
    question.classList.add("bold-question");
  } else {
    answer.classList.remove("response-appear");
    span.classList.remove("arrow-reverse");
    question.classList.remove("bold-question");
  }
}
function addAndDeleteAnswer3() {
  let articleChildArray = question3.childNodes;
  let answer = articleChildArray[3];
  // the response array classes css
  let answerClass = answer.classList;
  let question = articleChildArray[1];
  let questionChilds = question.childNodes;
  let span = questionChilds[1];

  console.log(answer);
  console.log(answerClass);

  if (answerClass.length === 1) {
    answer.classList.add("response-appear");
    span.classList.add("arrow-reverse");
    question.classList.add("bold-question");
  } else {
    answer.classList.remove("response-appear");
    span.classList.remove("arrow-reverse");
    question.classList.remove("bold-question");
  }
}
function addAndDeleteAnswer4() {
  let articleChildArray = question4.childNodes;
  let answer = articleChildArray[3];
  // the response array classes css
  let answerClass = answer.classList;
  let question = articleChildArray[1];
  let questionChilds = question.childNodes;
  let span = questionChilds[1];

  console.log(answer);
  console.log(answerClass);

  if (answerClass.length === 1) {
    answer.classList.add("response-appear");
    span.classList.add("arrow-reverse");
    question.classList.add("bold-question");
  } else {
    answer.classList.remove("response-appear");
    span.classList.remove("arrow-reverse");
    question.classList.remove("bold-question");
  }
}
function addAndDeleteAnswer5() {
  let articleChildArray = question5.childNodes;
  let answer = articleChildArray[3];
  // the response array classes css
  let answerClass = answer.classList;
  let question = articleChildArray[1];
  let questionChilds = question.childNodes;
  let span = questionChilds[1];

  console.log(answer);
  console.log(answerClass);

  if (answerClass.length === 1) {
    answer.classList.add("response-appear");
    span.classList.add("arrow-reverse");
    question.classList.add("bold-question");
  } else {
    answer.classList.remove("response-appear");
    span.classList.remove("arrow-reverse");
    question.classList.remove("bold-question");
  }
}

let questionList = document.getElementsByClassName("article");
let question1 = questionList[0];
let question2 = questionList[1];
let question3 = questionList[2];
let question4 = questionList[3];
let question5 = questionList[4];

question1.addEventListener("click", addAndDeleteAnswer1);
question2.addEventListener("click", addAndDeleteAnswer2);
question3.addEventListener("click", addAndDeleteAnswer3);
question4.addEventListener("click", addAndDeleteAnswer4);
question5.addEventListener("click", addAndDeleteAnswer5);
