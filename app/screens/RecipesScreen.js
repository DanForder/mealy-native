import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { recipes } from "../data/recipes";

function RecipesScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            onPress={() => {
              navigation.navigate("RecipeDetails", item);
            }}
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button
        title="Create Recipe"
        onPress={() => {
          navigation.navigate("RecipeCreate");
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  // header: { alignSelf: "center", marginBottom: 15, fontWeight: "bold" },
  screen: {
    padding: 20,
  },
});

export default RecipesScreen;
