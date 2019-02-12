const express = require("express");
const unirest = require("unirest");
const mongoose = require("mongoose");

const app = express();

/**
 * Connecting to the server
 */
mongoose
  .connect(
    "mongodb://admin:swiftaf@swiftionary-shard-00-00-inusj.mongodb.net:27017,swiftionary-shard-00-01-inusj.mongodb.net:27017,swiftionary-shard-00-02-inusj.mongodb.net:27017/test?ssl=true&replicaSet=Swiftionary-shard-0&authSource=admin&retryWrites=true"
  )
  .then(
    () => {
      console.log("Connected to Swiftionary cluster on MongoDB Atlas");
    },
    err => {
      console.log("Failed to connected to Swiftionary cluster");
    }
  );

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
app.get("/antonym", function(req, res) {
  const word = req.query.word;
  unirest
    .get(`https://wordsapiv1.p.mashape.com/words/${word}/antonyms`)
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
 * Rhyme GET Request from WordsAPI
 */
app.get("/rhyme", function(req, res) {
  const word = req.query.word;
  unirest
    .get(`https://wordsapiv1.p.mashape.com/words/${word}/rhymes`)
    .header(
      "X-Mashape-Key",
      "0339b5007bmshc2b0c44dc045fdep1e9fd9jsn9c50eeaea8b8"
    )
    .end(function(result) {
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
