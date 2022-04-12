import {
  Button,
  Image,
  Text,
  VStack,
  HStack
} from "native-base";
import React from "react";

const Card = ({
  title,
  popularity,
  release_date,
  img,
  navigation,
  overview,
}) => {
  return (
    <HStack mt="2" ml="2" mr="auto" mb={1}>
      <Image
        rounded="lg"
        source={{
          uri: img
        }} alt={title} size={'xl'} />
      <VStack ml="2" >
        <Text bold="true">
          {title}

        </Text>
        <Text mt={2}>Popularity: {popularity} </Text>
        <Text mt={0}>Release Date: {release_date}</Text>
        <Button w="100%" mt={4} onPress={() =>
          navigation.navigate("Details Page", {
            title,
            popularity,
            release_date,
            img,
            overview,
          })
        }
        > More Details </Button>
      </VStack>
    </HStack>
  );
};

export default Card;
