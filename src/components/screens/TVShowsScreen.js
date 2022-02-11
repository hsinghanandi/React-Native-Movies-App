import React from "react";
import CommonContainer from "../containers/CommonContainer";

const dropdown = ["airing_today", "on_the_air", "popular", "top_rated"];

const TVShowsScreen = ({ navigation }) => (
  <CommonContainer navigation={navigation} dropdown={dropdown} callType="tv" />
);

export default TVShowsScreen;
