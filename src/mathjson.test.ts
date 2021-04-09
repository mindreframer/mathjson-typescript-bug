import { expect } from "@jest/globals";
import { parse, serialize } from "@cortex-js/math-json";

describe("Dummy test", () => {
  it("works", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("parse", () => {
  it("should work", () => {
    console.log(parse("\\frac{\\pi}{2}"));
  });
});
