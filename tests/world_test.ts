import { describe, expect, test } from "bun:test";
import { world } from "../src/world.ts";

describe("World Tests", () => {
  test("Simple Test", () => {
    world();
    expect(true);
  });
});
