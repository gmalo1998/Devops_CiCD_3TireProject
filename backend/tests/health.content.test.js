import request from "supertest";
import app from "../src/index.js";

describe("Health Check", () => {

test("Response body exists", async () => {

const res =
await request(app)
.get("/health");

expect(
res.text ||
res.body
)
.toBeDefined();

});

});