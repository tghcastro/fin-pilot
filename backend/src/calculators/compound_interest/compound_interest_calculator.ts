import { InvalidParameterError } from "../../core/errors/invalid_parameter";
import calculatorInterface = require("../../core/interfaces/calculator.interface");
import { LogService } from "../../services/log_service";
import { CompoundInterestInput } from "./compound_interest_input";
import { CompoundInterestResult } from "./compound_interest_result";
import { InterestSchedule } from "./interest_schedule";

export class CompoundInterestCalculator implements calculatorInterface.Calculator<CompoundInterestInput, CompoundInterestResult> {

  logger: LogService = new LogService(this.constructor.name)

  calculate(input: CompoundInterestInput): CompoundInterestResult {
    const { principal, annualRate, periods , monthlyDeposit } = input;

    const monthlyRate: number = Math.pow(1 + (annualRate), 1 / 12) - 1
    const totalMonths = periods * 12

    this.logger.logDebug(`Calculating compound interest [principal:${principal}][monthlyDeposit:${monthlyDeposit}][annualRate:${annualRate}][monthlyRate: ${monthlyRate}][totalYears:${periods}][totalMonths:${totalMonths}]`)

    const finalAmount = (principal * Math.pow((1 + monthlyRate),totalMonths)) + (monthlyDeposit * ((Math.pow((1 + monthlyRate), totalMonths) - 1) / monthlyRate))
    const totalInvested = principal + (totalMonths * monthlyDeposit)
    const finalInterest = finalAmount - totalInvested
    
    let interest_schedule: InterestSchedule[] = []
    let accumulatedInterest = 0
    let accumulatedBalance = principal

    for (let month = 1; month <= totalMonths; month++) {
      const currentMonthAccumulatedDeposits = (month -1) * monthlyDeposit    
      const monthlyInterest = (principal + currentMonthAccumulatedDeposits + accumulatedInterest) * monthlyRate
      const monthlyInvested = principal + currentMonthAccumulatedDeposits
      accumulatedInterest += monthlyInterest
      accumulatedBalance = principal + accumulatedInterest + currentMonthAccumulatedDeposits
      interest_schedule.push(new InterestSchedule(month, monthlyInterest, monthlyInvested, accumulatedInterest, accumulatedBalance))
    }

    return new CompoundInterestResult(finalAmount, totalInvested, finalInterest, annualRate, monthlyRate, interest_schedule);
  }

}
