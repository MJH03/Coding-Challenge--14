//Module for calculating the amount of money needed to pay back a monthly loan
//Step 3:
export function calculateLoanPayment(Principal, Rate, Value) {
    return Principal[Rate*(1+Rate)**Value]/[(1+Rate)**Value-1]
}