export class InterestSchedule {
    constructor(
        public readonly month: number,
        public readonly monthlyInterest: number,
        public readonly totalInvested: number,
        public readonly totalInterest: number,
        public readonly totalBalance: number,
    ) { 

        this.month = month
        this.monthlyInterest = Math.round((monthlyInterest + Number.EPSILON) * 100) / 100
        this.totalInvested = Math.round((totalInvested + Number.EPSILON) * 100) / 100
        this.totalInterest = Math.round((totalInterest + Number.EPSILON) * 100) / 100
        this.totalBalance = Math.round((totalBalance + Number.EPSILON) * 100) / 100

    }
}
