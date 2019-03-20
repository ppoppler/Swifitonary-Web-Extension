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
  console.log(word);
  return axios.get("http://localhost:5000/synonym", {params: {word: word} })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};
