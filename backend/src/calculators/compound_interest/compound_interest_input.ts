export class CompoundInterestInput {
  constructor(
    public readonly principal: number,
    public readonly rate: number,
    public readonly periods: number
  ) {}
}
