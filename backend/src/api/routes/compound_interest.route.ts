import { Router } from "express";
import { CompoundInterestCalculator } from "../../calculators/compound_interest/compound_interest_calculator";
import { CompoundInterestInput } from "../../calculators/compound_interest/compound_interest_input";

export const compoundInterestRouter = Router();

compoundInterestRouter.post("/", (req, res) => {
  try {
    const { principal, annualRate, monthlyDeposit, periods } = req.body;
    const calculator = new CompoundInterestCalculator();
    const compoundInterestInput = new CompoundInterestInput(principal, annualRate, monthlyDeposit, periods)
    const result = calculator.calculate(compoundInterestInput);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});
