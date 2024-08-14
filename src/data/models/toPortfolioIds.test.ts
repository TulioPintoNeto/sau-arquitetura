import { input } from "./mock";
import { toPortfolioIds } from "./toPortfolioIds";

const output = ["30OHYFq84uSjY2KrJ4Ailc", "3bg5ZUttJyPrLA3PSKNAqc"];

test("toPortfolioIds model", () => {
  const result = toPortfolioIds(input);

  expect(result).toStrictEqual(output);
});
