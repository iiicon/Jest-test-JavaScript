import { statement } from "../src/statement/index";
import invoice from "../src/statement/invoice";
import plays from "../src/statement/plays";

test("测试打印信息", () => {
  let result = statement(invoice, plays);
  console.log(result)
  expect(result).toMatch(/Statement for/);
});

