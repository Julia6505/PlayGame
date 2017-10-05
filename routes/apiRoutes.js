var gamesPlayed = require("../data/playedGame");
var gamesNew = require("../data/newGame");

module.exports = function(app) {
app.get("/api/playedGame", function(req, res) {
res.json(gamesPlayed);
});

app.get("/api/newGame", function(req, res) {
res.json(gamesNew);
});

app.get('*', function (req, res) {
    res.render('index', {newGame: gamesPlayed});
    });


  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array

app.post("/api/gamesPlayed", function(req, res) {
    if (gamesPlayed.length < 5) {
        gamesPlayed.push(req.body);
        res.json(true);
        console.log(gamesPlayed);
    }else {
        gamesNew.push(req.body);
        res.json(false);
        console.log(gamesNew);
        }
    });
};






