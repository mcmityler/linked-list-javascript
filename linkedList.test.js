import { LinkedList } from "./linkedList.js";

const list = new LinkedList();
const emptyList = new LinkedList();

describe("Test out the linked list functions", () => {
  test("add a number to the end of the list of the list", () => {
    list.append(3);
    list.append(6);
    expect(list.toString()).toBe("( 3 ) -> ( 6 ) -> null");
  });
  test("add a number to the start of the list", () => {
    list.prepend(2);
    expect(list.toString()).toBe("( 2 ) -> ( 3 ) -> ( 6 ) -> null");
  });
  test("get size of list; should be 3", () => {
    expect(list.size()).toBe(3);
  });
  test("get value of head node, should be 2", () => {
    expect(list.getHeadValue()).toBe(2);
  });
  test("get value of an empty list head node, should be undefined", () => {
    expect(emptyList.getHeadValue()).toBe(undefined);
  });
  test("get tail node value, should be 6", () => {
    expect(list.getTailValue()).toBe(6);
  });
  test("get value of an empty list tail node, should be undefined", () => {
    expect(emptyList.getTailValue()).toBe(undefined);
  });
});
