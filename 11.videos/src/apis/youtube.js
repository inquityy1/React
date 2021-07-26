import axios from "axios";

const KEY = "AIzaSyBMQt-jxnv-woh_4zgyuc0RvcDkeLtIduc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
