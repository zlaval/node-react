const request = require('supertest')
const expect = require("expect")

const { app } = require("../src/server")

describe('GET /v1/home', () => {
    it('should get back hello world', (done) => {
        request(app)
            .get('/v1/home')
            .expect(200)
            .expect((res) => {
                expect(res.text).toBe('hello world')
            })
            .end(done)
    })
})

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

