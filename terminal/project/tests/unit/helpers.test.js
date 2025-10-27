// Unit tests for helper functions
describe("Helpers", () => {
  test("formatString should format correctly", () => {
    const result = formatString("hello");
    expect(result).toBe("HELLO");
  });

  test("calculateSum should return correct sum", () => {
    const result = calculateSum(1, 2, 3);
    expect(result).toBe(6);
  });
});

function formatString(str) {
  return str.toUpperCase();
}

function calculateSum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
