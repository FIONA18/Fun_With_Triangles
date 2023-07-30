const sides = document.querySelectorAll(".sides")
const btnSubmit = document.querySelector("#submit")
const output = document.querySelector("#output")
function Validate(side1, side2)
{
    let result =true;
    if(side1<=0 || side2<=0)
    {
        output.innerHTML = "Enter Valid Data";
        result = false;
    }
    return result;
}

function FindHypotenuse(side1, side2)
{
    return Math.sqrt(side1**2 + side2**2)
}
btnSubmit.addEventListener("click", function OnSubmitClicked()
{
    const side1 = Number(sides[0].value);
    const side2 = Number(sides[1].value);
    if(Validate(side1, side2))
    {
        const answer = FindHypotenuse(side1, side2);
        output.innerHTML = answer;
    }
   
})