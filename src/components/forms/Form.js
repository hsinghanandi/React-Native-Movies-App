import React, { useState } from "react";
import { Button, FormControl, HStack, Icon, Input, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  Text,
  NativeBaseProvider,
} from "native-base";
import { getSearchResults } from "../services/api";

const Form = (props) => {
  const { option, setOption, dropdown, populateMovies, callType } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});
  // const [searchResults, setSearchResults] = useState([]);

  // const [option, setOption] = useState("");

  const onSubmit = () => {
    // fetchRecipes()
    fetchSearchResults(callType, searchQuery, option);
    console.log("Search button clicked!", callType, searchQuery, option);
  };

  const fetchSearchResults = async (callType, searchQuery, option) => {
    try {
      const { data } = await getSearchResults(callType, searchQuery, option);
      if (data.results.length) {
        populateMovies(data.results);
      } else {
        console.log("No Movie found!");
      }
    } catch (error) {
      console.log(error.message);
    }

    // console.log("SEARCHED", data);
  };

  return (
    <VStack space={3} width="100%" py={6}>
      <FormControl isRequired>
        <FormControl.Label fontSize="sm">
          Search Movie/TV Show Name
        </FormControl.Label>
        <VStack width="100%" space={2}>
          <Input
            placeholder="i.e. James Bond, CSI, ..."
            variant="filled"
            bg="gray.200"
            px={2}
            width="100%"
            InputLeftElement={
              <Icon
                size={5}
                ml={2}
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
            onChangeText={(value) => {
              // console.log(value)d
              // onInputChange(value)
              setSearchQuery(value);
            }}
          />
        </VStack>
      </FormControl>

      <FormControl isRequired>
        <FormControl.Label fontSize="sm">Choose Search Type</FormControl.Label>
        <HStack width="100%" space={2}>
          <Box maxW="280">
            <Select
              selectedValue={option}
              minWidth="200"
              key={option}
              defaultValue={dropdown[0]}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => {
                setOption(itemValue);
                // fetchMovies(itemValue);
              }}
            >
              {dropdown &&
                dropdown.map((item, idx) => (
                  <Select.Item label={item} value={item} key={idx} />
                ))}
            </Select>
          </Box>
          <Button
            onPress={onSubmit}
            startIcon={<Icon as={Ionicons} size={4} name="ios-search" />}
          >
            Search
          </Button>
        </HStack>
        <Text>Please select a search type</Text>
      </FormControl>
    </VStack>
  );
};

export default Form;
