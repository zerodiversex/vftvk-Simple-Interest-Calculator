let p = document.getElementById("principal");
let r = document.querySelector("#rate")
let y = document.querySelector("#years")
let rn = document.querySelector("#rate-number")
let result = document.querySelector("#result")
let resultPricipale = document.querySelector("#result-principal")
let resultRate = document.querySelector("#result-rate")
let resultYear = document.querySelector("#result-year")
let resultResult = document.querySelector("#result-result")

function compute()
{
    if(p.value === undefined && Number(p.value) <= 0){
        alert("You must enter a positive value!")
        p.focus = true
    }
    resultPricipale.innerHTML = p.value
    resultRate.innerHTML = r.value
    resultYear.innerHTML = (new Date()).getFullYear() + Number(y.value)
    resultResult.innerHTML = calculateInterest(Number(p.value), Number(y.value), Number(r.value))
    result.classList.remove("hidden")
}

function calculateInterest(amount, years, rate){
    let res = amount;
    for(let i = 0; i < years; i++){
        res += amount * rate / 100;
    }
    return res - amount
}

document.querySelector("#rate").addEventListener('input', (e) => {
    rn.innerHTML = e.target.value
})       

