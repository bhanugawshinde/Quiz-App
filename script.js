const Questions =[
    {
        question: "Q1: Which of the following JavaScript cannot do?",
        a:"JavaScript can react to events ",
        b:"JavaScript can manipulate HTML elements",
        c:"JavaScript can be use to validate data ",
        d:"All of the Above",
        ans:"ans4"

    },
    {
        question: "Q2: Whats so great about XML? ",
        a:"Easy data exchange",
        b:"High speed on network",
        c:" Only B.is correct",
        d:"Both A & B",
        ans:"ans4"

    },
    {
        question: "Q3: ________ keyword is used to declare variables in javascript.",
        a:" Var",
        b:"Dim ",
        c:"String ",
        d:"int",
        ans:"ans1"

    },
    {
        question: "Q4:  HTML stands for what?",
        a:" Hypertrophic Management Language",
        b:" Hyperbaric Tertiary Logarithm",
        c:" Hypertext Markup Language",
        d:"Hyperresonant Marginal Logarithm",
        ans:"ans3"

    },
    {
        question: "Q5: The <h1> element in the HTML defines",
        a:"Headings",
        b:"Hyperlink",
        c:"Hyper Text",
        d:"Html-text",
        ans:"ans1"

    }
];
const question = document.querySelector('#question');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector('#opt4');
const answers = document.querySelectorAll('.answers');
const Next = document.querySelector('#next');
const showScore = document.querySelector('.quizArea');

let questionCount = 0;
let score = 0;

const loadQuestion =()=>{
    const questionData = Questions[questionCount];

    question.innerText = questionData.question;
    option1.innerText = questionData.a;
    option2.innerText = questionData.b;
    option3.innerText = questionData.c;
    option4.innerText = questionData.d;
}

loadQuestion();

const getOption = ()=>{
    let answer;
    answers.forEach((currentOption)=>{
        if(currentOption.checked){
             answer = currentOption.id;
        }
       
    });
    return answer;

}

Next.addEventListener('click', () =>{
const option = getOption();
console.log(option);
if(option === Questions[questionCount].ans){
    score++;
}else{
    score=score;
}
console.log(score);
questionCount++; 
if(questionCount<Questions.length){
    loadQuestion();
}
else{
showScore.innerHTML=`
<div id="result">
<h2> you Scored is ${score}/${Questions.length}</h2>
</div>
`;
}
})
