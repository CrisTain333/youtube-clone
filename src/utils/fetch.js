import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US", maxResults: "100" },
  headers: {
    "X-RapidAPI-Key":
      "6a48666bbemsh0caf40fd208c4ebp1f6116jsn6ef63e5523f2" ||
      "YOUR_API_KEY",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(
    `${BASE_URL}/${url}`,
    options
  );
  console.log(data);
  return data;
};
