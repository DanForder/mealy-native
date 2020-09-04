import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Recipe from "../components/Recipe";
import Screen from "../components/Screen";
import Text from "../components/Text";
import colors from "../config/colors";

function RecipeDetailsScreen({ route }) {
  const recipe = route.params;

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <ScrollView stickyHeaderIndices={[1]}>
        <Image style={styles.image} source={recipe.image} />
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
