import request from "supertest";
import app from "../src/index.js";

describe.skip("Login Validation", () => {

test("Missing password", async () => {

const res =
await request(app)
.post("/api/auth/login")
.send({
email:"test@test.com"
});

expect(
[400,422]
).toContain(
res.statusCode
);

});

});