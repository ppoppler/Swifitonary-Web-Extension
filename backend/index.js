const express = require("express");
const unirest = require("unirest");

const app = express();

const PORT = process.env.PORT || 5000;


/**
 * Define GET Request from WordsAPI
 */
app.get("/define", function(req, res) {
  const word = req.query.word;
  let definition;
  unirest
    .get(`https://wordsapiv1.p.mashape.com/words/${word}`)
    .header(
      "X-Mashape-Key",
      "0339b5007bmshc2b0c44dc045fdep1e9fd9jsn9c50eeaea8b8"
    )
    .end(function(result) {
      console.log(result.body);
      res.send(result.body);
    });
});


/**
 * Synonym GET Request from WordsAPI
 */
app.get("/synonym", function(req, res) {
  const word = req.query.word;
  unirest
    .get(`https://wordsapiv1.p.mashape.com/words/${word}/synonyms`)
    .header(
      "X-Mashape-Key",
      "0339b5007bmshc2b0c44dc045fdep1e9fd9jsn9c50eeaea8b8"
    )
    .end(function(result) {
        console.log(result.body);
        res.send(result.body);
    });
});

/**
 * Antonym GET Request from Words API
 */
app.get("/antonym", function(req, res){
    const word = req.query.word;
    unirest
    .get(`https://wordsapiv1.p.mashape.com/words/${word}/antonyms`)
    .header(
      "X-Mashape-Key",
      "0339b5007bmshc2b0c44dc045fdep1e9fd9jsn9c50eeaea8b8"
    ).end(function(result){
        console.log(result.body);
        res.send(result.body);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/", function(req, res) {
  res.send({ express: "hello" });
});

app.get("/of_course", function(req, res) {
  res.send({ express: string });
});
