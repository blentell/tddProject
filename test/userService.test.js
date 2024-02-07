jest.mock("../database");
const { getUserById } = require("../userService");
const { findUserById } = require("../database");

describe("getUserById", () => {
	test("should return user data for a given user id", async () => {
		const mockUserId = 1;
		const mockUserData = { id: mockUserId, name: "John Doe" };

		findUserById.mockResolvedValue(mockUserData);

		const result = await getUserById(mockUserId);

		expect(result).toEqual(mockUserData);

		expect(findUserById).toHaveBeenCalledWith(mockUserId);
	});
});
