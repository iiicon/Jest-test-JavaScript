import { statement } from "../src/statement/statement";
import invoice from "../src/statement/invoice";
import plays from "../src/statement/plays";

test("测试打印信息", () => {
  let result = statement(invoice, plays);
  console.log(result)
  expect(result).toMatch(/Amount owed is \$1,640.00/);
});

