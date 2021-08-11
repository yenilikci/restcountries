let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../../index");
let should = chai.should();
chai.use(chaiHttp);

describe("/GET", () => {
  it("should take all countries", (done) => {
    chai
      .request(server)
      .get("/api/v1/countries/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
