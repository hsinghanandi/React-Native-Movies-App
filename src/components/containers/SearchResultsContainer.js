import React, { useState } from "react";
import { Button, FormControl, HStack, Icon, Input, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Select, Box, CheckIcon, Text, NativeBaseProvider } from "native-base";
import { Center, Container } from "native-base";
import Form from "../forms/Form";
import List from "../lists/List";

// const SearchResultsContainer = props => {
//     // const { onInputChange, fetchRecipes } = props
//     const [formData, setData] = useState('')
//     const [errors, setErrors] = useState({})

//     const [searchItem, setSearchItem] = useState('')

//     const onSubmit = () => {
//         // fetchRecipes()
//         searchItem.trim() ?  console.log("Search button clicked", option ) : console.log("error")
//       }

//     return (
//     <Center px={6}>
//     <VStack space={3} width='100%' py={6}>
//     <FormControl isRequired>
//       <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
//       <VStack width='100%' space={2}>
//         <Input
//           placeholder='i.e. James Bond, CSI, ...'
//           variant='filled'
//           bg='gray.200'
//           px={2}
//           width='100%'
//           InputLeftElement={
//             <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
//           }
//            onChangeText={value => {
//             setSearchItem(value)
//             // setData({ ...formData, name: value })
//           }}
//         />
//           </VStack>
//     </FormControl>

//     <FormControl isRequired>
//     <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
//         <HStack width='100%' space={2}>
//             <SelectForm />
//             <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} size={4} name='ios-search' />}>
//                 Search
//             </Button>
//         </HStack>
//      <Text>Please select a search type</Text>
//     </FormControl>
//   </VStack>
//   </Center>
//     );
//   }

const SearchResultsContainer = ({ navigation }) => {
  const dropdown = ["multi", "tv", "movie"];
  const [option, setOption] = useState(dropdown[0]);
  const [movies, setMovies] = useState([]);

  // const [isLoading, setIsLoading] = useState(false)

  function populateMovies(movies) {
    setMovies(movies);
  }
  return (
    <VStack space={3}>
      {/* {isLoading ? <Loading /> : <MoviesList navigation={navigation} recipes={recipes} />} */}
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
