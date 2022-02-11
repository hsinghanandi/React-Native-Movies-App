import axios from "axios";
import React, { useState } from "react";
import { API_KEY, API_URL } from "../config/api_config";
import MovieCard from "../listItems/Card";

export const getMovies = async (callType, movieType) => {
  console.log("Inside API.js");

  try {
    const API_CALL = `${API_URL}/${callType}/${movieType}?api_key=${API_KEY}`;

    const result = await axios.get(API_CALL);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearchResults = async (callType, searchQuery, option) => {
  console.log("Inside API.js getSearchResults", searchQuery);

  try {
    const API_CALL = `${API_URL}/${callType}/${option}?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}&include_adult=false`;
    console.log(API_CALL);

    const result = await axios.get(API_CALL);
    return result;
  } catch (error) {
    throw error;
  }
};
