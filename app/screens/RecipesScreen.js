import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";
import colors from "../config/colors";

const recipes = [
  {
    id: 1,
    title: "Avocado & black bean eggs",
    subTitle: "Time for a tasty debrief",
    image: require("../assets/images/avocado_blackbean_eggs.jpg"),
  },
  {
    id: 2,
    title: "Creamy tomato courgetti",
    subTitle: "Sexilicous!",
    image: require("../assets/images/creamy-tomato-courgetti.jpg"),
  },
  {
    id: 3,
    title: "Sweet potato & cauliflower lentil bowl",
    subTitle: "Zingy vegan goodness",
    image: require("../assets/images/sweet-potato-bowl.jpg"),
  },
];

function RecipesScreen() {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.header}>Recipes</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { alignSelf: "center", marginBottom: 15, fontWeight: "bold" },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default RecipesScreen;
