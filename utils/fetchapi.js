import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchapi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      "X-RapidAPI-Key": "66e17f9775msh52ab94609039378p183539jsned52ecf69948",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
