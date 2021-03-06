import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import RecipesScreen from "../screens/RecipesScreen";
import CreateRecipeScreen from "../screens/CreateRecipeScreen";

const Stack = createStackNavigator();

const RecipeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ title: "Recipes" }}
      name="RecipeList"
      component={RecipesScreen}
    />
    <Stack.Screen
      options={{ title: "Create Recipe" }}
      name="RecipeCreate"
      component={CreateRecipeScreen}
    />
    <Stack.Screen
      options={{ title: "Recipe Details" }}
      name="RecipeDetails"
      component={RecipeDetailsScreen}
    />
  </Stack.Navigator>
);

export default RecipeNavigator;
