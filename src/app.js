const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome! Application deployed using CI/CD pipeline. This done to test my deployment to ec2");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "devops-ec2-cicd"
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;
