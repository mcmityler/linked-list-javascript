import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
const emptyList = new LinkedList();

describe("Append some items to the list", () => {
  test("add a number to the start of the list", () => {
    list.append(3);
    expect(list.toString()).toBe("( 3 ) -> null");
  });
});
