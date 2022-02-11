import axios from "axios";
import { API_KEY, API_URL } from "../config/api_config";

export const getMovies = async (callType, movieType) => {
  try {
    const API_CALL = `${API_URL}/${callType}/${movieType}?api_key=${API_KEY}`;
    const result = await axios.get(API_CALL);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearchResults = async (callType, searchQuery, option) => {
  try {
    const API_CALL = `${API_URL}/${callType}/${option}?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}&include_adult=false`;
    const result = await axios.get(API_CALL);
    return result;
  } catch (error) {
    throw error;
  }
};
