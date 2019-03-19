import axios from "axios";

export const getDefinition = word => {
    console.log(word);
  axios.get("/define", word).then(res => {
      return res.data;
  });
};
