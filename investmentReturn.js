//Module for calculating the investment return for stocks or bonds
//Step 4:
export function calculateInvestmentReturn(Principal, Rate, Value, Time) {
    return Principal*(1+ Rate/Value)**(Value*Time)
}