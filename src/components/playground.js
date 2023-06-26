const axios = require("axios");
const url = "http://localhost:3000/jobs";

const playJob1 = async () => {
  await axios.get(url).then((response) => {
    console.log(response);
  });
};
playJob1();
const playJob2 = () => {
  const response = axios.get(url);
  console.log(response);
};

playJob2();
