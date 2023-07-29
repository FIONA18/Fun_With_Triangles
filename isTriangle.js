const angles = document.querySelectorAll(".angle")
const btnSubmit = document.querySelector("#isTriangleBtn")
const output = document.querySelector("#output")

function CalculateSum(angle1, angle2, angle3)
{
    return angle1+angle2+angle3;
}

function ValidateTriangle(sum, angle1, angle2, angle3)
{
    let result = false;
    console.log(sum, angle1, angle2, angle3);
    if (sum===180 && angle1>0 && angle2>0 && angle3>0)
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
    if (ValidateData())
    {
        const angle1 = Number(angles[0].value);
        const angle2 = Number(angles[1].value);
        const angle3 = Number(angles[2].value);
        let sum = CalculateSum(angle1, angle2, angle3)
        if(ValidateTriangle(sum, angle1, angle2, angle3))
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
