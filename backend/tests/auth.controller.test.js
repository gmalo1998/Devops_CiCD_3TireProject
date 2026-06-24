import { jest } from "@jest/globals";

const mockCreate = jest.fn();

jest.unstable_mockModule(
  "../src/models/user.model.js",
  () => ({
    default: {
      create: mockCreate
    }
  })
);

const { default: User } =
await import(
  "../src/models/user.model.js"
);

describe("Signup Controller", () => {

test("Create User", async () => {

mockCreate.mockResolvedValue({
email: "demo@test.com"
});

const user =
await User.create();

expect(user.email)
.toBe("demo@test.com");

});

});