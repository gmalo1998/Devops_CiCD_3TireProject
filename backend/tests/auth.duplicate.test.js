import request from "supertest";
import app from "../src/index.js";

describe.skip("Duplicate Signup", () => {

test("Should reject duplicate email", async () => {

const user = {
fullName:"Ganesh",
email:"ganesh@test.com",
password:"Password123"
};

await request(app)
.post("/api/auth/signup")
.send(user);

const res =
await request(app)
.post("/api/auth/signup")
.send(user);

expect([400,409])
.toContain(res.statusCode);

});

});