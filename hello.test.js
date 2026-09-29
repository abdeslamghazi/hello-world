import { test } from "node:test";
import assert from "node:assert/strict";
import { hello } from "./hello.js";

test("salue par le prénom", () => {
  assert.equal(hello("Abdeslam"), "Bonjour, Abdeslam !");
});

test("salutation en arabe", () => {
  assert.equal(hello("Abdeslam", "ar"), "مرحبا, Abdeslam !");
});
