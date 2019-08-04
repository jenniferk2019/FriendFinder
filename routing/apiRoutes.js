//.POST
var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends.js", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends.js", function (req, res) {

        //survey details: name, photo, scores
        var user = req.body;

        //score parseInt
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        //default match is the first breed
        //result is the minimum difference in scores
        var pawFriendIndex = 0;
        var minimumDifference = 40;

        //for-loop: start with 0 difference
        //compare user with scores
        //add difference to total difference
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            //for new difference: change pawfriendindex and set new minimum for next comparisons
            if (totalDifference < minimumDifference) {
                pawFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }

        res.json(friends[pawFriendIndex]);

    });
};
