//Module for calculating the investment return for stocks or bonds
//Step 4:
export function calculateInvestmentReturn(investPrincipal, investRate, investValue, investTime) {
    return investPrincipal*(1+ investRate/investValue)**(investValue*investTime)
}