import request from "supertest";
import app from "../src/index.js";

describe("Message Validation",()=>{

test("Empty message",async()=>{

const res =
await request(app)
.post("/api/messages/send/123")
.send({
text:""
});

expect(
[400,401,404]
)
.toContain(
res.statusCode
);

});

});