import sum from "./sum";

const user = {
  name: "Matt",
  age: 22,
};

// Normal test
test("Matt is 22", () => {
  expect(user.name).toBe("Matt");
  expect(user.age).toBe(22);
});

test("two plus two equal to four ", () => {
  expect(sum(2, 2)).toBe(4);
});

// WITH describe() and it()

// group with describe()
// write one test with it()
describe("sum tests", () => {
  it("2+2 equal to 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
  it("1+1 equal to 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
});

describe("user test", () => {
  it("user name is Matt", () => {
    expect(user.name).toBe("Matt");
  });
  it("user age is 22", () => {
    expect(user.age).toBe(22);
  });
});
