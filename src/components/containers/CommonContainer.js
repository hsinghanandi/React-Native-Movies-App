import { Center, VStack } from "native-base";
import React, { useState } from "react";
import SelectForm from "../forms/SelectForm";
import List from "../lists/List";

import Loading from "../layout/Loading";

const CommonContainer = ({ navigation, dropdown, callType }) => {
  const [option, setOption] = useState();
  const [movies, setMovies] = useState([]);
  //   const dropdown = ["popular", "now_playing", "top_rated", "upcoming"];
  // const [isLoading, setIsLoading] = useState(false)

  function populateMovies(movies) {
    setMovies(movies);
  }
  return (
    <VStack space={3} py={2}>
      {/* {isLoading ? <Loading /> : <MoviesList navigation={navigation} recipes={recipes} />} */}
      <Center>
        <SelectForm
          option={option}
          setOption={setOption}
          dropdown={dropdown}
          populateMovies={populateMovies}
          callType={callType}
        />
      </Center>
      <List navigation={navigation} movies={movies} />
    </VStack>
  );
};

export default CommonContainer;
