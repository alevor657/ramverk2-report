/**
 * Testing out Express server
 */

const app = require('../app/server');
const request = require("supertest");

test('Express server answers with 200', () => {
    return request(app)
        .get("/")
        .expect(200);
});
