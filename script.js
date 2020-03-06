let input = document.querySelector("input");
let message = document.querySelector("h3");
var intervalID =document.querySelector("button")


const pi = 3.14;

function berekenOmtrek()
{
    return input.value * pi;
}

function berekenOppervlakte()
{
    let test = input.value;
    return ( test * test * pi * 0.25);
}

function showMessage()
{
    message.innerText = "De omtrek van de circel is: " + berekenOmtrek() + " en de oppervlakte is: " + berekenOppervlakte();

    
    console.log("hi");
    var d = new Date();
    document.getElementById("demo").innerHTML = d;
    var time = XMLHttpRequestUpload();
    scope.setInterval("button",code, delay);
}