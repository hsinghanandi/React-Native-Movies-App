import React from "react";
import DetailContainer from "../containers/DetailContainer";

const DetailScreen = ({ navigation, route }) => (
  <DetailContainer navigation={navigation} data={route.params} />
);

export default DetailScreen;
