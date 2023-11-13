const correctAnswers = ["A","A","A","A","A",]

const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
const questionBox = document.querySelectorAll(".question")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    let score = 0;

    userAnswers.forEach((answer,index)=>{
         if(answer === correctAnswers[index]){
            score += 1;
           questionBox[index].classList.add("correct")
         }else{
            questionBox[index].classList.add("wrong")

         }
    })
     scrollTo(0,0)
    result.classList.remove("hide")
    result.querySelector("p").innerText=`You scored ${score}/5`;


})