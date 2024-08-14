import { input } from "./mock";
import { toPortfolio } from "./toPortfolio";

const output = [
  {
    name: "Cozinha - Rafael Dias Mazza (2)",
    photo: {
      alt: "Alguma descrição",
      url: "https://images.ctfassets.net/b3ruagn4bm0g/4gjWcobT7JnaBH7IDeCOpn/6f9eeadda36a397c42fe28181c66b9a7/b_730_0ca80fb8-8702-47c7-b056-267a697d52f0.jpg",
    },
  },
  {
    name: "Cozinha - Rafael Dias Mazza",
    photo: {
      alt: "Alguma descrição",
      url: "https://images.ctfassets.net/b3ruagn4bm0g/4gjWcobT7JnaBH7IDeCOpn/6f9eeadda36a397c42fe28181c66b9a7/b_730_0ca80fb8-8702-47c7-b056-267a697d52f0.jpg",
    },
  },
];

test("toPortfolio model", () => {
  const result = toPortfolio(input);

  expect(result).toStrictEqual(output);
});
