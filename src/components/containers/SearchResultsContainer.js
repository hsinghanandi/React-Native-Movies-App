import React, { useState } from "react";
import { Center, VStack } from "native-base";
import Form from "../forms/Form";
import List from "../lists/List";

const SearchResultsContainer = ({ navigation }) => {
  const dropdown = ["multi", "tv", "movie"];
  const [option, setOption] = useState(dropdown[0]);
  const [movies, setMovies] = useState([]);

  function populateMovies(movies) {
    setMovies(movies);
  }
  return (
    <VStack space={3}>
      <Center px={5}>
        <Form
          option={option}
          setOption={setOption}
          dropdown={dropdown}
          populateMovies={populateMovies}
          callType="search"
        />
      </Center>
      <List navigation={navigation} movies={movies} />
    </VStack>
  );
};

export default SearchResultsContainer;
