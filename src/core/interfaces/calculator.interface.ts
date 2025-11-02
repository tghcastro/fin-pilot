export interface Calculator<I, R> {
  calculate(input: I): R;
}
