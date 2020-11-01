import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Code Life",
    image: require("../assets/code.jpg"),
  },
  {
    id: 2,
    title: "Beautiful!",
    image: require("../assets/architecture.jpg"),
  },
];

function PostsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image} 
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default PostsScreen;
