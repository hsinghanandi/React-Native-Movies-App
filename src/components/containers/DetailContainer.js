import {
  Center,
  VStack,
  Stack,
  Heading,
  Text,
  Box,
  AspectRatio,
  Image,
} from "native-base";
import React from "react";

// title,
// popularity,
// release_date,
// img,

const DetailContainer = ({ navigation, data }) => {
  return (
    <VStack space={3} py={2}>
      <Stack p="6" space={2}>
        <Center>
          <Stack>
            <Heading size="sm" ml="-1">
              {data.title}
            </Heading>
          </Stack>
        </Center>
        <Center>
          <Stack>
            <Box>
              <AspectRatio w="100%" ratio={1}>
                <Image
                  source={{
                    uri: data.img,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
          </Stack>
        </Center>

        <Center>
          <Stack p="2">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="300"
            >
              {data.overview}
            </Text>
          </Stack>
        </Center>

        <Center>
          <Stack>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="300"
            >
              Popularity: {data.popularity}
            </Text>
          </Stack>
        </Center>

        <Center>
          <Stack>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="300"
            >
              Release Date: {data.release_date}
            </Text>
          </Stack>
        </Center>
      </Stack>
    </VStack>
  );
};

export default DetailContainer;
