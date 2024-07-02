//Module for calculating the amount of money needed to pay back a monthly loan
//Step 3:
export function calculateLoanPayment(loanPrincipal, loanRate, loanValue) {
    return loanPrincipal*[loanRate*(1+loanRate)**loanValue]/[(1+loanRate)**loanValue-1]
}