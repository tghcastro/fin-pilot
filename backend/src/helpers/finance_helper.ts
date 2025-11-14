import { InvalidParameterError } from "../core/errors/invalid_parameter"

export function calculateMonthlyInterest(annualInterestRate: number) {
    if (annualInterestRate < 0) {
        throw new InvalidParameterError("Interest rate should be a positive number")
    }
    return  Math.pow(1 + (annualInterestRate), 1 / 12) - 1
}
