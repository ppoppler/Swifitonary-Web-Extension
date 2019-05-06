const express = require("express");
const unirest = require("unirest");
const mongoose = require("mongoose");
var holdStuff = "";
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
      "4294668b27msh51c33875b90f837p1120c4jsna5651c475d5d"
    )
    .end(function(result) {
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
      "4294668b27msh51c33875b90f837p1120c4jsna5651c475d5d"
    )
    .end(function(result) {
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
      "4294668b27msh51c33875b90f837p1120c4jsna5651c475d5d"
    )
    .end(function(result) {
      res.send(result.body);
    });
});

/**
 * Spellcheck GET Request from a SpellCheckAPI
 */
app.get("/spellcheck",function(req,res){
  const word = req.query.word; //to do multiple words put "+" in between the words 
unirest.get("https://montanaflynn-spellcheck.p.rapidapi.com/check/?text="+word)
.header("X-RapidAPI-Key", "4294668b27msh51c33875b90f837p1120c4jsna5651c475d5d")
.end(function (result) {
 
holdStuff = result.body //hold stuff is a global variable 
 res.send(result.body);

});
});

/**
 * Urban Dictionary GET Request from an UrbanDictionaryAPI
 */
app.get("/urban",function(req,res){
  const word = req.query.word; //to do multiple words put "+" in between the words 
  unirest.get("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+word)
  .header("X-RapidAPI-Key", "4294668b27msh51c33875b90f837p1120c4jsna5651c475d5d")
  .end(function (result) {   
    holdStuff =result;
    res.send(result.body);

  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get("/wiki",function(req,res){
  const searchTerm = req.query.word; //to do multiple words put "+" in between the words 
  unirest.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=querypage&qppage=DisambiguationPageLinks&continue=&titles= " + searchTerm +"&exsentences=6&redirects")
  .end(function(result){
    holdStuff = result;
    
  var pageId=Object.keys(holdStuff.body.query.pages)[0];
  res.send(holdStuff.body.query.pages[pageId]);
});
  });