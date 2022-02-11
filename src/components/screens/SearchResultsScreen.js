import React from "react";
import SearchResultsContainer from "../containers/SearchResultsContainer";

const dropdown = ["multi", "tv", "movie"];

const SearchResultsScreen = ({ navigation }) => (
  <SearchResultsContainer navigation={navigation} dropdown={dropdown} />
);

export default SearchResultsScreen;
