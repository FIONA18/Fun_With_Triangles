const form = document.getElementById('quizForm');
const btnSubmit = document.querySelector("#submit");
const output =document.querySelector("#output")
const correctAnswers = ['90°', 'right-angled'];

btnSubmit.addEventListener("click", function OnSubmitClicked()
{
    const formData = new FormData(form);
    let score =0;
    for (let data of formData.entries())
    {
        console.log(data[0], data[1]);
        if (data[0] === "q1")
        {
            if (data[1] === correctAnswers[0])
            {
                score=score+1;
            }
        }
        else
        {
            if (data[1] === correctAnswers[1])
            {
                score=score+1;
            }
        }
    }
    output.innerHTML="Your score is : "+ score;
 
})