import { Center, Text } from "native-base";
import { ActivityIndicator } from "react-native";

import React from "react";

const Loading = () => {
  return (
    <Center>
      <Text>
        <ActivityIndicator /> Loading Data, please wait
      </Text>
    </Center>
  );
};

export default Loading;
