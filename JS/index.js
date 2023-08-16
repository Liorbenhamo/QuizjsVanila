const arrQ = ["מי המציא את הטלפון", "80/4", "9+6*2", "8-4", "5-2"];
const arrAn = ["אלכסנדרגרהםבל", 20, 21, 4, 3];
const objOfAn = {
  q1: ["אלכסנדרגרהםבל", "אייזיק ניוטון", "יונתן בן עזרא", "גיתם"],
  q2: [45, 84, 20, 10],
  q3: [84, 25, 65, 21],
  q4: [48, 6, 8, 4],
  q5: [3, 5, 48, 75],
};
let answer;
let question = document.querySelector("#question");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let button = document.querySelector("#button");
let next = 0;
let count = 0;
newQ();
answer1.addEventListener("click", () => {
  answer = answer1.innerText;
});
answer2.addEventListener("click", () => {
  answer = answer2.innerText;
});
answer3.addEventListener("click", () => {
  answer = answer3.innerText;
});
answer4.addEventListener("click", () => {
  answer = answer4.innerText;
});
button.addEventListener("click", () => {
  if (answer !== undefined) {
    console.log(answer);
    console.log(arrAn[next]);
    if (answer == arrAn[next]) {
      console.log("ssd ");
      count++;
    }
    answer = undefined;
    next++;

    if (next < 5) {
      newQ();
    } else {
      question.innerText = `right answers:${count}`;
      answer1.remove();
      answer2.remove();
      answer3.remove();
      answer4.remove();
      button.remove();
    }
  }
});

function newQ() {
  question.innerText = arrQ[next];
  answer1.innerText = objOfAn[`q${next + 1}`][0];
  answer2.innerText = objOfAn[`q${next + 1}`][1];
  answer3.innerText = objOfAn[`q${next + 1}`][2];
  answer4.innerText = objOfAn[`q${next + 1}`][3];
  console.log(count);
}
