


document.getElementById("Button1").addEventListener("click", amortizationCalc);

function amortizationCalc() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let termYears = parseFloat(document.getElementById("termYears").value);
        if (termYears !== 15 && termYears !== 30) {
            alert("Please enter a valid term of either 15 or 30 years.");
            return;
        }
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    let monthlyPayment = (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (termYears * -12)))).toFixed(2);
    console.log("Monthly Payment: $" + monthlyPayment);
    loanBlanaceCalc(monthlyPayment);

}

const mortgageAmount = loanAmount + totalInterest;
const totalInterest = (monthlyPayment * termYears * 12) - loanAmount;
const totalMortgageAmount = loanAmount + totalInterest;
document.getElementById("result").innerHTML = "Mortgage term: " + termYears + " years<br>Interest Rate: " + interestRate + "%<br>Mortgage Amount: $" + mortgageAmount + "<br>Total Interest: $" + totalInterest + "<br>Total Mortgage Amount: $" + totalMortgageAmount;

function loanBlanaceCalc() {
    let monthylyBalance = totalMortgageAmount - monthlyPayment;
    console.log("Monthly Balance: $" + monthylyBalance);
        if (monthylyBalance < 0) {
            return;
        } else {
            console.log("This is the Ending Amortization Calculator");
        }
}