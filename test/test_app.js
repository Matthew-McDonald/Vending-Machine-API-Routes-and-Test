const assert = require("assert")
const request = require("supertest")
const app = require("../app")

//Start Tests
describe("GET /api/customer/items", function () {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/customer/items")
      .expect(200)
      .end(done);
  })

  // it("should check for returned items", function(done) {
  //   assert(app("Chips"))
  //   .end(done)
  // })
});


describe("GET /api/vendor/purchases", function () {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/vendor/purchases")
      .expect(200)
      .end(done);
  })
});
