const request = require('supertest')
const expect = require("expect")

const { app } = require("../src/server")

describe('GET /v1/home', () => {
    it('should get back hello world', (done) => {
        request(app)
            .get('/v1/home')
            .expect(200)
            .end(done)
    })
})

