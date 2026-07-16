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
  test("get element at an index; when its 0", () => {
    expect(list.at(0)).toBe(2);
  });
  test("get element at an index; when its 1", () => {
    expect(list.at(1)).toBe(3);
  });
  test("get element at an index; when its bigger than the list size", () => {
    expect(list.at(300)).toBe(undefined);
  });
  test("get element at an index; when its negative", () => {
    expect(list.at(-1)).toBe(undefined);
  });
  test("get element at an index; when empty array", () => {
    expect(emptyList.at(0)).toBe(undefined);
  });
  test("pop an element from the list", () => {
    expect(list.pop()).toBe(2);
  });
  test("pop an element from the empty list", () => {
    expect(emptyList.pop()).toBe(undefined);
  });
  test("list contains the number 3; which it does", () => {
    expect(list.contains(3)).toBe(true);
  });
  test("list contains the number 4; which it doesn't", () => {
    expect(list.contains(3)).toBe(true);
  });
  test("empty list contains the number 3; to be undefined", () => {
    expect(emptyList.contains(3)).toBe(false);
  });
  test("find index of 6; should be 1", () => {
    expect(list.findIndex(6)).toBe(1);
  });
  test("find index of 23; doesnt exist", () => {
    expect(list.findIndex(23)).toBe(-1);
  });
  test("find index of 23 in empty list; doesnt exist", () => {
    expect(emptyList.findIndex(23)).toBe(-1);
  });

  test("show string of list", () => {
    expect(list.toString()).toBe("( 3 ) -> ( 6 ) -> null");
  });
  test("show string of empty list", () => {
    expect(emptyList.toString()).toBe("");
  });
  test("throws RangeError if index is below 0 or above the list's size", () => {
    expect(list.insertAt(-1, 99)).toBe("Out of Range");
    expect(list.insertAt(999, 99)).toBe("Out of Range");
  });
  test("add to beginning", () => {
    list.insertAt(0, 25, 26, 27);
    expect(list.toString()).toBe(
      "( 25 ) -> ( 26 ) -> ( 27 ) -> ( 3 ) -> ( 6 ) -> null",
    );
  });

  test("add to beginning", () => {
    list.insertAt(4, 42, 1);
    expect(list.toString()).toBe(
      "( 25 ) -> ( 26 ) -> ( 27 ) -> ( 3 ) -> ( 42 ) -> ( 1 ) -> ( 6 ) -> null",
    );
  });

  test("remove at 5", () => {
    list.removeAt(5);
    expect(list.toString()).toBe(
      "( 25 ) -> ( 26 ) -> ( 27 ) -> ( 3 ) -> ( 42 ) -> ( 6 ) -> null",
    );
  });
});
