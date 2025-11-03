export class BaseError extends Error {
  public readonly code: string;
  public readonly statusCode: number;

  constructor(message: string, code = "GENERIC_ERROR", statusCode = 400) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;

    if (typeof (Error as any).captureStackTrace === "function") {
      (Error as any).captureStackTrace(this, this.constructor);
    }
  }
}
