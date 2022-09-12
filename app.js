const initialPrice = document.querySelector("#initial-price");
const stocksQt = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");

var btn = document.querySelector("#calculate-btn");
var outputBox = document.querySelector("#output-div");

btn.addEventListener('click', clickHandler);

function clickHandler() {
    if ((!initialPrice.value)||(!stocksQt.value) || (!currentPrice.value)) {
        alert("Please fill all fields!!! 😈");
    } else {
        const ip = Number(initialPrice.value);
        const sq = Number(stocksQt.value);
        const cp = Number(currentPrice.value);

        if(ip > 0 && sq > 0 && cp > 0){
            calculate(ip, sq, cp);
        }else{
            displayResult("Please enter all fields & Valid Values", "red");
        }
    }
}


function calculate(initial, stocks, current) {

    if (initial > current) {
        const loss = (initial - current) * stocks;
        const lossPercentage = (loss / initial) * 100;
        var str1="You book loss of Rs." + loss.toFixed(2) + " & percentage of loss is " + lossPercentage.toFixed(2) + "% 😢";
        displayResult(str1 , "red");

    } else if (initial < current) {

        const profit = (current - initial) * stocks;
        const profitPercentage = (profit / current) * 100;
        var str="You book profit of Rs." + profit.toFixed(2) + " & percentage of profit is " + profitPercentage.toFixed(2) + "% 🤑";
        displayResult(str, "green");
    } else {
        displayResult("No Pain No gain! No Gain No Pain! 🙂", "white");

    }
}

function displayResult(msg, color){
    outputBox.innerText = msg;
    outputBox.style.color = color;
}