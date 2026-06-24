import request from "supertest";
import app from "../src/index.js";

describe("Health Route", () => {

test("Server healthy", async()=>{

const res =
await request(app)
.get("/health");

expect(res.statusCode)
.toBe(200);

});

});