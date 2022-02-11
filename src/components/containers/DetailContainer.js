import {
  Center,
  VStack,
  HStack,
  Stack,
  Heading,
  Text,
  Box,
  AspectRatio,
  Image,
} from "native-base";
import React from "react";

const DetailContainer = ({ data }) => {
  return (
    <VStack space={5} py={3} px={5}>
      <Stack p="6" space={2}>
        <Center>
          <Stack pb={5}>
            <Heading size="md" ml="-1">
              {data.title}
            </Heading>
          </Stack>
        </Center>
        <Stack>
          <Box>
            <Center>
              <AspectRatio w="80%" ratio={1}>
                <Image
                  source={{
                    uri: data.img,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Center>
          </Box>
        </Stack>

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

        <HStack p="2" space={1}>
          <Stack>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="500"
            >
              Popularity: {data.popularity}
            </Text>
          </Stack>
          <Stack>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="500"
            >
              | Release Date: {data.release_date}
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </VStack>
  );
};

export default DetailContainer;
