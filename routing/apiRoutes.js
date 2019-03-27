var friends = require("app/data/friends.js");

module.exports = function(app) {
  app.get("app/data/friends.js", function(req, res) {
    res.json(friends);
  });

  app.post("app/data/friends.js", function(req, res) {
    console.log(req.body.scores);

    var user = req.body;

    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.score[i]);
    }

    var friends = 0;
    var minDifference = 40;

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      for (var x = 0; x < friends[i].scores.length; x++) {
        var difference = Math.abs(user.scores[x] - friends[i].scores[x]);
        totalDifference += difference;
      }

      if (totalDifference < minDifference) {
        friends = i;
        minDifference = totalDifference;
      }
    }

    friends.push(user);

    res.json(friends[friends]);
  });
};
