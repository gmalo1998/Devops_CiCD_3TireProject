import request from "supertest";
import app from "../src/index.js";

describe("Body Validation",()=>{

test("Invalid request",async()=>{

const res =
await request(app)
.post("/api/auth/signup")
.send(null);

expect(
[400,422]
)
.toContain(
res.statusCode
);

});

});