import request from "supertest";
import app from "../src/index.js";

describe("Auth", () => {

test("health", async () => {

const res =
await request(app)
.get("/health");

expect(res.status).toBe(200);

});

});