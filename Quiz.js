// data
let questions = [

    {
        question: "which one is a data type in javascript",
        option: ["float", "string", "double", "char"],
        answer: "string"
    },
    {
        question: "which keyword is used to define a function?",
        option: ["function", "fun", "def", "fn"],
        answer: "function"
    },
    {
        question: "which one is a loop in javascript",
        option: ["repeat", "loop", "for", "foreach"],
        answer: "foreach"
    },

];
const qu = document.getElementById("qu");
const option = document.getElementById("option");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
let current = 0;
let total = questions.length;
let count = 0;
let right = 0;
//function

function options(count) {

    for (let j = 0; j < questions[count].option.length; j++) {
        let label = document.createElement("label");
        let input = document.createElement("input");

        input.type = "radio";
        input.name = "Quiz-option";
        input.value = questions[count].option[j];
        label.appendChild(input);
        label.append('' + questions[count].option[j]);
        option.appendChild(label);
        option.appendChild(document.createElement("br"));

    }

}

function clickbtn() {


    if (count < questions.length - 1) {
        count++;
        qu.innerText = questions[count].question;
        document.getElementById("option").innerHTML = "";
        options(count);
        let progress = (count / total) * 100;
        document.getElementById("progress_bar").style.width = progress + "%";
        cerrect();

    } else if (count = questions.length) {
        let progress = (count / total) * 100;
        document.getElementById("progress_bar").style.width = progress + "%";
        endresult();

    }



}


function endresult() {
    result.innerHTML = `<p> your answer to ${right} at ${questions.length} </p>`
}

function cerrect() {
    const answer = questions[count].answer;
    // const selectedOption = document.querySelector("input[name='Quiz-option']:checked");
    const input = document.querySelectorAll("input[name='Quiz-option']");
    input.forEach(input => {
        input.addEventListener('click', () => {
            const selector = input.value;
            console.log(`کلیک ثبت شد: ${input.value}`);
            if (answer === selector) {
                right++;
                console.log(right);
            }
        });

    });



}
document.addEventListener("DOMContentLoaded", () => {
    qu.innerText = questions[count].question;
    options(count);
    cerrect();


})