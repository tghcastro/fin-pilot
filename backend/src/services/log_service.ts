export class LogService {
    constructor(
        public readonly clazz: string, 
    ) { }

    logDebug(message: string): void {
        const now: Date = new Date();
        console.log(`${now.toISOString()} ${message} ${this.clazz}`)
    }
}
