import { getPagesArray } from "./pagination";
test("Pagination return correct array", () => {
  expect(getPagesArray(3)).toStrictEqual([1, 2, 3]);
  expect(getPagesArray(0)).toStrictEqual([]);
});

test("getCharacter to return correct result", async () => {});
