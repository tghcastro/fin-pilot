import { CompoundInterestCalculator } from "../../src/calculators/compound_interest/compound_interest_calculator";
import { CompoundInterestInput } from "../../src/calculators/compound_interest/compound_interest_input";

describe("CompoundInterestCalculator", () => {
  it("Should calculate the compound interest for a given input", () => {
    const calc = new CompoundInterestCalculator();
    const input = new CompoundInterestInput(1000, 0.05, 2);
    const result = calc.calculate(input);

    expect(result.finalAmount).toBeCloseTo(1102.5);
    expect(result.totalInterest).toBeCloseTo(102.5);
  });

  it("Should throw an error when principal is lower than 1", () => {
    const calc = new CompoundInterestCalculator();
    const input = new CompoundInterestInput(0, 0.05, 2);
    expect(() => calc.calculate(input)).toThrow("Invalid input values");
  });
});
