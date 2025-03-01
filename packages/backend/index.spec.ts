import { expect, it } from "vitest";
import { describe } from "vitest";
import { backendFunction } from ".";
import { AnotherError, CustomError } from "errors/errors/error";

describe("repro", () => {
  it("should throw an error", () => {
    const error = backendFunction();

    expect(error).toBeInstanceOf(AnotherError);
  });
});
