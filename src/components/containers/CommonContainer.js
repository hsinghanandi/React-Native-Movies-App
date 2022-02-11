import { Center, VStack } from "native-base";
import React, { useState } from "react";
import SelectForm from "../forms/SelectForm";
import List from "../lists/List";

const CommonContainer = ({ navigation, dropdown, callType }) => {
  const [option, setOption] = useState();
  const [movies, setMovies] = useState([]);

  function populateMovies(movies) {
    setMovies(movies);
  }
  return (
    <VStack space={3} py={2}>
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
