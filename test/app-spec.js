const request = require("supertest");
const {
    app
} = require('../src/app');

describe("app", () =>{
    it("should get all accounts when request url pattern is '/accounts'", (done) =>{
        request(app).get('/accounts').expect(200).expect([
            {
              "name": "Tom",
              "phoneNumber": 123456,
              "email": "1@1.com"
            },
            {
              "name": "Jerry",
              "phoneNumber": 123456,
              "email": "1@2.com"
            }
        ]).end((err, res) => {
            if(err) throw err
            done()
        })
    })
})