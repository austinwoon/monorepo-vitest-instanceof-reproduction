import { AnotherError } from "errors/errors/error";

export function returnError() {
  return new AnotherError("Something went wrong");
}
