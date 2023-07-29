const angles = document.querySelectorAll(".angle")
const btnSubmit = document.querySelector("#isTriangleBtn")
const output = document.querySelector("#output")

function CalculateSum(angle1, angle2, angle3)
{
    return angle1+angle2+angle3;
}

function ValidateTriangle(sum)
{
    let result = false;
    if(sum===180)
    {
        result =true;
    }
    return result;
}
function ValidateData()
{
    let result =true;
    if(angles[0].value==="" || angles[1].value==="" || angles[2].value==="")
    {
        output.innerHTML = "Enter Valid Data"
        result =false;
    }
    return result;
}

btnSubmit.addEventListener("click", function OnSubmitClicked()
{
    if(ValidateData())
    {
        console.log(angles[0].value, angles[1].value, angles[2].value)
        let sum = CalculateSum(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value))
        if(ValidateTriangle(sum))
        {
            output.innerHTML = "YES"
        }
        else
        {
            output.innerHTML = "NO"
        }
    }
   
})
output.innerHTML="";
