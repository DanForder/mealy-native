import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import Text from "../components/Text";
import Screen from "../components/Screen";
import { ingredients } from "../data/ingredients";
import Button from "../components/Button";
import Fraction from "fraction.js";

function PlannerDetailsScreen({ route, navigation }) {
  const planArray = route.params;
  const [uniqueIngredientsArray, setUniqueIngredientsArray] = useState([]);

  const getAllIngredients = () => {
    let ingredients = [];

    planArray.forEach((recipe) => {
      ingredients.push(...recipe.plannerIngredients);
    });

    setUniqueIngredientsArray(createUniqueIngredients(ingredients));
  };

  const createUniqueIngredients = (ingredientsArray) => {
    const uniqueArray = [];

    for (let index = 0; index < ingredientsArray.length; index++) {
      const newIngredient = { ...ingredientsArray[index] };

      const itemInNewArray = uniqueArray.filter(
        (item) => item.ingredientId === newIngredient.ingredientId
      );

      if (!itemInNewArray.length > 0) {
        uniqueArray.push(newIngredient);
      } else {
        itemInNewArray[0].amount += newIngredient.amount;
      }
    }

    return uniqueArray;
  };

  const getIngredientText = (item) => {
    const ingredient = ingredients.filter(
      (ingredient) => ingredient.id === item.ingredientId
    )[0];

    let string = "";

    if (ingredient.unit === "numeric") {
      string = `${new Fraction(item.amount).toFraction(true)} x `;
    } else if (ingredient.unit !== "other") {
      string = `${new Fraction(item.amount).toFraction(true)} ${
        ingredient.unit
      } of `;
    }

    string += ingredient.displayName;

    return string;
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={planArray}
        keyExtractor={(recipe) => recipe.id.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              paddingTop: 15,
              alignItems: "center",
            }}
          >
            <Text>Day {planArray.indexOf(item) + 1}: </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RecipeDetails", item);
              }}
            >
              <Text style={{ color: "dodgerblue" }}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {uniqueIngredientsArray.length < 1 && (
        <Button title="Show Ingredients" onPress={getAllIngredients} />
      )}
      <FlatList
        data={uniqueIngredientsArray}
        keyExtractor={(ingredient) => ingredient.ingredientId.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <>
            <Text>{getIngredientText(item)}</Text>
          </>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { justifyContent: "space-between" },
});

export default PlannerDetailsScreen;
