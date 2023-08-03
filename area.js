const userInputs = document.querySelectorAll(".userInputs")
const btnSubmit = document.querySelector("#submit")
const output = document.querySelector("#output")

function ValidateData(base, height)
{
    let result = true;
    if (base<=0 || height<=0)
    {
        result = false;
        output.innerHTML= "Enter valid Data";
    }
    return result;
}

btnSubmit.addEventListener("click", function OnSubmitClicked()
{
    let base = Number(userInputs[0].value);
    let height =  Number(userInputs[1].value);
    if (ValidateData(base, height))
    {
        let area = 0.5 * base * height;
        output.innerHTML = area;
    }

})