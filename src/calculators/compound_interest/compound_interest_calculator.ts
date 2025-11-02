import { InvalidParameterError } from "../../core/errors/invalid_parameter";
import calculatorInterface = require("../../core/interfaces/calculator.interface");
import { CompoundInterestInput } from "./compound_interest_input";
import { CompoundInterestResult } from "./compound_interest_result";

export class CompoundInterestCalculator implements calculatorInterface.Calculator<CompoundInterestInput, CompoundInterestResult> {
  calculate(input: CompoundInterestInput): CompoundInterestResult {
    const { principal, rate, periods } = input;

    if (principal <= 0 || rate <= 0 || periods < 1) {
      throw new InvalidParameterError("All parameters must be positive");
    }

    const finalAmount = principal * Math.pow(1 + rate, periods);
    const interest = finalAmount - principal;

    return new CompoundInterestResult(finalAmount, interest);
  }
}
