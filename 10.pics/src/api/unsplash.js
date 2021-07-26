import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xQ7ZzowCSsMVoB2XYUNcVAkQr8orpr6Ey_5YHEnNnFg",
  },
});
