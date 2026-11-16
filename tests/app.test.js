const test = require("node:test");
const assert = require("node:assert");
const app = require("../src/app");

test("Health endpoint returns healthy status", async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;
        const response = await fetch(`http://localhost:${port}/health`);
        const data = await response.json();

        assert.equal(response.status, 200);
        assert.equal(data.status, "healthy");
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});
