/*
   get() functions to get the information through the backend to use with the frontend
*/
import axios from "axios";

export const getDefinition = (word,response) => {
  return axios.get("http://swiftbackend-239810.appspot.com/define", { params: { word: word } })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getSynonym = (word,response) => {

  return axios.get("http://swiftbackend-239810.appspot.com/synonym", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getAntonym = (word,response) => {

  return axios.get("http://swiftbackend-239810.appspot.com/antonym", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getUrban = (word,response) => {

  return axios.get("http://swiftbackend-239810.appspot.com/urban", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getspellCheck = (word,response) => {

  return axios.get("http://swiftbackend-239810.appspot.com/spellcheck", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getWiki = (word,response) => {

  return axios.get("http://swiftbackend-239810.appspot.com/wiki", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};
