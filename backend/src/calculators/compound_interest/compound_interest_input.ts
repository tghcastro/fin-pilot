export class CompoundInterestInput {
  constructor(
    public readonly principal: number,
    public readonly annualRate: number,
    public readonly monthlyDeposit: number,
    public readonly periods: number
  ) {}
}
