import axios from "axios";
import { config } from "./Config";

export async function getMovies() {
  try {
    const url = `${config.server}/movie/AllMovie`;
    const response = await axios.get(url);
    return response.data;
  } catch (ex) {
    console.log(`exception`, ex);
    return { status: 'error', error: ex.response?.data?.error || ex.message };
  }
}
