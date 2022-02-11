import { FlatList } from "native-base";
import React from "react";
import Card from "../listItems/Card";

const List = (props) => {
  const { navigation, movies } = props;

  const imgURL = "https://image.tmdb.org/t/p/w200";

  return (
    <FlatList
      data={movies}
      renderItem={({ item, index }) => (
        <Card
          key={index}
          title={item.title ? item.title : item.name}
          popularity={item.popularity}
          release_date={
            item.release_date ? item.release_date : item.first_air_date
          }
          img={item.poster_path ? `${imgURL}${item.poster_path}` : ""}
          overview={item.overview}
          navigation={navigation}
        />
      )}
      // keyExtractor={(item) => item.url}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default List;
