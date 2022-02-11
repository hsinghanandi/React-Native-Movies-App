import React from "react";
import CommonContainer from "../containers/CommonContainer";

const dropdown = ["popular", "now_playing", "top_rated", "upcoming"];

const MoviesScreen = ({ navigation }) => (
  <CommonContainer
    navigation={navigation}
    dropdown={dropdown}
    callType="movie"
  />
);

export default MoviesScreen;
