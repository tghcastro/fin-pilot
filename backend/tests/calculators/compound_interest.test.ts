import { CompoundInterestCalculator } from "../../src/calculators/compound_interest/compound_interest_calculator";
import { CompoundInterestInput } from "../../src/calculators/compound_interest/compound_interest_input";
import { InterestSchedule } from "../../src/calculators/compound_interest/interest_schedule";

describe("CompoundInterestCalculator", () => {
  it("Should calculate the compound interest with principal and monthly deposits", () => {
    const calc = new CompoundInterestCalculator();
    const principal = 1000;
    const monthlyDeposit = 1000;
    const annualRate = 0.1;
    const periodsInYears = 1;
    const input = new CompoundInterestInput(
      principal,
      annualRate,
      monthlyDeposit,
      periodsInYears
    );
    const result = calc.calculate(input);

    expect(result.finalAmount).toBeCloseTo(13640.54);
    expect(result.totalInterest).toBeCloseTo(640.54);
    expect(result.totalInvested).toBeCloseTo(13000.0);

    expect(result.interestSchedule.length).toBe(12);
  });

  it("Should calculate the compound interest with principal only", () => {
    const calc = new CompoundInterestCalculator();
    const principal = 1000;
    const monthlyDeposit = 0;
    const annualRate = 0.1;
    const periodsInYears = 1;
    const input = new CompoundInterestInput(
      principal,
      annualRate,
      monthlyDeposit,
      periodsInYears
    );
    const result = calc.calculate(input);

    expect(result.finalAmount).toBeCloseTo(1100.0);
    expect(result.totalInterest).toBeCloseTo(100.0);
    expect(result.totalInvested).toBeCloseTo(1000.0);

    expect(result.interestSchedule.length).toBe(12);
  });

  it("Should calculate the monthly compound data", () => {
    const calc = new CompoundInterestCalculator();
    const principal = 1000;
    const monthlyDeposit = 1000;
    const annualRate = 0.1;
    const periodsInYears = 1;
    const input = new CompoundInterestInput(
      principal,
      annualRate,
      monthlyDeposit,
      periodsInYears
    );
    const result = calc.calculate(input);

    const expectedFirstMonth = {
      month: 1,
      monthlyInterest: 7.97,
      totalInvested: 1000,
      totalInterest: 7.97,
      totalBalance: 1007.97,
    };
    expect(result.interestSchedule[0]).toMatchObject(expectedFirstMonth);

    const expectedEighthMonth = {
      month: 8,
      monthlyInterest: 65.6,
      totalInvested: 8000,
      totalInterest: 292.47,
      totalBalance: 8292.47,
    };
    expect(result.interestSchedule[7]).toMatchObject(expectedEighthMonth);

    const expectedTenthMonth = {
      month: 10,
      monthlyInterest: 82.66,
      totalInvested: 10000,
      totalInterest: 449.24,
      totalBalance: 10449.24,
    };
    expect(result.interestSchedule[9]).toMatchObject(expectedTenthMonth);

    const expectedTwelfthMonth =     {
      "month": 12,
      "monthlyInterest": 100,
      "totalInvested": 12000,
      "totalInterest": 640.54,
      "totalBalance": 12640.54
    };
    expect(result.interestSchedule[11]).toMatchObject(expectedTwelfthMonth);
  });
});
