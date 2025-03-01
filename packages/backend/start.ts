import { AnotherError } from "errors/errors/error";
import { backendFunction } from ".";

function test() {
  console.log(">>> running....");
  const res = backendFunction();
  console.log(res instanceof AnotherError);
}

test();
