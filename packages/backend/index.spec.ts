import { expect, it } from "vitest";
import { describe } from "vitest";
import { backendFunction } from ".";
import { AnotherError } from "errors/errors/error";

describe("repro", () => {
  it("should throw an error", () => {
    const error = backendFunction();

    console.log(
      ">> error",
      Object.getPrototypeOf(error),
      Object.getPrototypeOf(AnotherError),
      error instanceof AnotherError
    );

    expect(error).toBeInstanceOf(AnotherError);
  });
});
