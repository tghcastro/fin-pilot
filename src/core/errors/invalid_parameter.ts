import { BaseError } from "./error";

export class InvalidParameterError extends BaseError {
  constructor(message = "Invalid parameters provided") {
    super(message, "INVALID_PARAMETER", 422);
  }
}
