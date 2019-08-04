var path = require("path");

// HTML GET Requests - show HTML content
module.exports = function (app) {

    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //back to HTML
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
