//U6899-7808
//Main Module for calculation
//Step 5:
import { calculateInterestRate } from "./interestRate.js";
import { calculateInvestmentReturn } from "./investmentReturn.js";
import { calculateLoanPayment } from "./loanPayment.js";

//Functions binding for financial Calculator

// Interest Rate:

document.getElementById("calculateInterestRateBtn").addEventListener("click", function (){
        const Principal = parseFloat(document.getElementById("Principal").value);
        const Rate = parseFloat(document.getElementById("Rate").value);
        const Time = parseFloat(document.getElementById("Time").value);
        const interest = calculateInterestRate(Principal, Rate, Time)
        document.getElementById("interestAmount").innerText = `Interest is ${interest.toFixed(2)}%`
})

// Loan Payment:

document.getElementById("calculateLoanPaymentBtn").addEventListener("click", function (){
    const loanPrincipal = parseFloat(document.getElementById("loanPrincipal").value);
    const loanRate = parseFloat(document.getElementById("loanRate").value);
    const loanValue = parseFloat(document.getElementById("loanValue").value);
    const Payment = calculateLoanPayment(loanPrincipal, loanRate, loanValue)
    document.getElementById("paymentAmount").innerText = `Monthly Loan Payment is $${Payment.toFixed(2)}`
})

// Investment Return:

document.getElementById("calculateInvestmentReturnBtn").addEventListener("click", function (){
    const investPrincipal = parseFloat(document.getElementById("investPrincipal").value);
    const investRate = parseFloat(document.getElementById("investRate").value);
    const investValue = parseFloat(document.getElementById("investValue").value);
    const investTime = parseFloat(document.getElementById("investTime").value);
    const Return = calculateInvestmentReturn(investPrincipal, investRate, investValue, investTime)
    document.getElementById("returnAmount").innerText = `The return on the investment: $${Return.toFixed(2)}`
})