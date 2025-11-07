import { InterestSchedule } from "./interest_schedule";

export class CompoundInterestResult {
  constructor(
    public readonly finalAmount: number,
    public readonly totalInvested: number,
    public readonly totalInterest: number,
    public readonly annualRate: number,
    public readonly monthlyRate: number,
    public readonly interestSchedule: InterestSchedule[] 
  ) {}
}
