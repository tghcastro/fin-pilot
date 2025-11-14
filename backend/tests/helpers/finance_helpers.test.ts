import { InvalidParameterError } from "../../src/core/errors/invalid_parameter";
import { calculateMonthlyInterest } from "../../src/helpers/finance_helper";

describe("Finance Helper", () => {
  it("Calculate a monthlyInterestRate for a given positive annualInterestRate", () => {
    const annualInterestRate = 12;
    const monthlyInterestRate = calculateMonthlyInterest(annualInterestRate);
    expect(monthlyInterestRate).toBeCloseTo(0.238307);
  });
  it("monthlyInterestRate is 0 when annualInterestRate is 0 ", () => {
    const annualInterestRate = 0;
    const monthlyInterestRate = calculateMonthlyInterest(annualInterestRate);
    expect(monthlyInterestRate).toBeCloseTo(0);
  });
  it("Throw an error when a negative annualInterestRate is provided", () => {
    const annualInterestRate = -12;
    // expect(calculateMonthlyInterest(annualInterestRate)).toThrow(InvalidParameterError);
    expect(() => {
      calculateMonthlyInterest(annualInterestRate);
    }).toThrow(InvalidParameterError);
  });
});
