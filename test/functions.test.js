const { add, subtract, multiply, divide } = require("../functions");

describe("Math operations", () => {
	test("adds 1 + 2 to equal 3", () => {
		expect(add(1, 2)).toBe(3);
	});

	test("subtracts 2 - 1 to equal 1", () => {
		expect(subtract(2, 1)).toBe(1);
	});

	test("multiplies 2 * 3 to equal 6", () => {
		expect(multiply(2, 3)).toBe(6);
	});

	test("divides 4 /2 to equal 2", () => {
		expect(divide(4, 2)).toBe(2);
	});

	test("division by zero throws error", () => {
		expect(() => divide(4, 0)).toThrow("Division by zero");
	});
});
