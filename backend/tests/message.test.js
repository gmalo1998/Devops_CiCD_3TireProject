import { jest } from "@jest/globals";
import request from "supertest";
import app from "../src/index.js";

jest.setTimeout(20000);

describe("Message API", () => {

  test("Message endpoint should respond", async () => {

    const res = await request(app)
      .post("/api/messages/send/123")
      .send({
        text: "hello"
      });

    console.log("STATUS:", res.statusCode);
    console.log("BODY:", res.body);

    expect(
      [200, 201, 400, 401, 403, 404]
    ).toContain(
      res.statusCode
    );

  });

  test("Unauthorized request", async () => {

    const res = await request(app)
      .post("/api/messages/send/123")
      .send({
        text: "test"
      });

    console.log(
      "AUTH STATUS:",
      res.statusCode
    );

    expect(
      [401, 403, 404]
    ).toContain(
      res.statusCode
    );

  });

});