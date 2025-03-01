export class CustomError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AnotherError extends CustomError {
  constructor(message: string) {
    super(message);
  }
}
