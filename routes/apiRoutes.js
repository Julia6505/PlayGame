var gamesPlayed = require("../data/playedGame");
var gamesNew = require("../data/newGame");

module.exports = function(app) {
app.get("/api/playedGame", function(req, res) {
res.json(gamesPlayed);
});

app.get("/api/newGame", function(req, res) {
res.json(gamesNew);
res.render('index', {newGame: gamesNew});
});

app.get('/', function (req, res) {
    var games = gamesNew;
    res.render('index', {games});
    });


  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array

app.post("/api/gamesNew", function(req, res) {
    // if (gamesNew.length) {
        gamesNew.push(req.body);
        // console.log(gamesNew);
        res.redirect('/')
        // res.json(true);
    
    // };
    // else {
    //     gamesNew.push(req.body);
    //     res.json(false);
    //     console.log(gamesNew);
    //     }
    });
};






