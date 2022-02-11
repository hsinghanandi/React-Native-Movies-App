import {
  Box,
  Button,
  AspectRatio,
  Stack,
  Heading,
  Image,
  Text,
  VStack,
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
    <Box alignItems="center" mb={3}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{ backgroundColor: "gray.50" }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: img,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>

        <Stack p="2" space={1}>
          <Stack>
            <Heading size="sm" ml="-1">
              {title}
            </Heading>
          </Stack>
          <Stack>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="300"
            >
              Popularity: {popularity}
            </Text>
          </Stack>
          <Stack>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="300"
            >
              Release Date: {release_date}
            </Text>
          </Stack>

          <VStack alignItems="center">
            <Button
              width="100%"
              onPress={() =>
                navigation.navigate("Details Page", {
                  title,
                  popularity,
                  release_date,
                  img,
                  overview,
                })
              }
            >
              More Details
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Box>
    // </VStack>
  );
};

export default Card;
