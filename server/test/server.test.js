const request = require('supertest')
const expect = require("expect")

const { app } = require("../src/server")

describe('GET /v1/users', () => {
    it('should return users from db', (done) => {
        request(app)
            .get('/v1/users')
            .expect(200)
            .expect((res) => {
                expect(res.body.users.length).toBe(1)
            })
            .end(done);
    })
})

