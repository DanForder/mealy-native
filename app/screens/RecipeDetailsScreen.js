import React from "react";
import { View, Image, StyleSheet, FlatList, ScrollView } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import Screen from "../components/Screen";
import Recipe from "../components/Recipe";

const recipe = {
  id: 1,
  title: "Avocado & black bean eggs",
  subTitle: "Time for a tasty debrief",
  image: require("../assets/images/avocado_blackbean_eggs.jpg"),
  ingredients: [
    "2 tsp rapeseed oil",
    "1 red chilli, deseeded and thinly sliced",
    "1 large garlic clove, sliced",
    "2 large eggs",
    "400g can black beans",
    "½ x 400g can cherry tomatoes",
    "¼ tsp cumin seeds",
    "1 small avocado, halved and sliced",
    "handful fresh, chopped coriander",
    "1 lime, cut into wedges",
  ],
  method: [
    "Heat the oil in a large non-stick frying pan. Add the chilli and garlic and cook until softened and starting to colour. Break in the eggs on either side of the pan. Once they start to set, spoon the beans (with their juice) and the tomatoes around the pan and sprinkle over the cumin seeds. You’re aiming to warm the beans and tomatoes rather than cook them.",
    "Remove the pan from the heat and scatter over the avocado and coriander. Squeeze over half of the lime wedges. Serve with the remaining wedges on the side for squeezing over.",
  ],
};

function RecipeDetailsScreen() {
  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Image
          style={styles.image}
          source={require("../assets/images/avocado_blackbean_eggs.jpg")}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.subTitle}>{recipe.subTitle}</Text>
        </View>
        <Recipe recipe={recipe} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: colors.light,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "100",
    fontStyle: "italic",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default RecipeDetailsScreen;
