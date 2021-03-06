import React, { useEffect } from "react";
import { Select, Box, CheckIcon } from "native-base";
import { getMovies } from "../services/api";

const SelectForm = ({
  option,
  setOption,
  dropdown = [],
  populateMovies,
  callType,
  setLoading,
}) => {
  const fetchMovies = async (itemValue) => {
    const { data } = await getMovies(callType, itemValue);
    populateMovies(data.results);
  };

  useEffect(() => {
    fetchMovies(dropdown[0]);
  }, []);

  return (
    <Box maxW="280">
      <Select
        selectedValue={option}
        minWidth="200"
        key={option}
        defaultValue={dropdown[0]}
        _selectedItem={{
          bg: "#52b3d1",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          setOption(itemValue);
          fetchMovies(itemValue);
          setLoading(true);
        }}
      >
        {dropdown &&
          dropdown.map((item, idx) => (
            <Select.Item label={item} value={item} key={idx} />
          ))}
      </Select>
    </Box>
  );
};

export default SelectForm;
