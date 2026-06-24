import request from "supertest";
import app from "../src/index.js";

describe("Logout", () => {

test("Logout user", async () => {

const res =
await request(app)
.post("/api/auth/logout");

expect(
[200,204]
).toContain(
res.statusCode
);

});

});