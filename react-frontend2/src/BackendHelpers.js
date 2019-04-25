import axios from "axios";

export const getDefinition = (word,response) => {
  console.log(word);
  return axios.get("http://localhost:5000/define", { params: { word: word } })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getSynonym = (word,response) => {
  
  return axios.get("http://localhost:5000/synonym", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getAntonym = (word,response) => {
  
  return axios.get("http://localhost:5000/antonym", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getUrban = (word,response) => {
  
  return axios.get("http://localhost:5000/urban", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getspellCheck = (word,response) => {
  
  return axios.get("http://localhost:5000/spellcheck", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export const getWiki = (word,response) => {
  
  return axios.get("http://localhost:5000/wiki", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};