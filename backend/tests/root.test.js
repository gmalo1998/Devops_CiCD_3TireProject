import request from "supertest";
import app from "../src/index.js";

describe("Root Route",()=>{

test("Backend running",async()=>{

const res =
await request(app)
.get("/");

expect(
res.statusCode
)
.toBe(200);

expect(
res.text
)
.toContain(
"Backend running"
);

});

});