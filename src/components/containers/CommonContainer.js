import { Center, VStack } from "native-base";
import React, { useState } from "react";
import SelectForm from "../forms/SelectForm";
import Loading from "../layout/Loading";
import List from "../lists/List";

const CommonContainer = ({ navigation, dropdown, callType }) => {
  const [option, setOption] = useState();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  function populateMovies(movies) {
    setMovies(movies);
    setLoading(false);
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
          setLoading={setLoading}
        />
      </Center>
      {loading ? <Loading /> : <List navigation={navigation} movies={movies} />}
    </VStack>
  );
};

export default CommonContainer;
