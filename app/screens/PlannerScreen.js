import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import { TouchableOpacity } from "react-native-gesture-handler";
import InputSpinner from "react-native-input-spinner";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Text from "../components/Text";
import colors from "../config/colors";
import { recipes } from "../data/recipes";

function PlannerScreen(props) {
  const [inputValue, setInputValue] = useState(1);

  const [recipeValue, setRecipeValue] = useState([]);
  const [text, setText] = useState("");

  const getAutocompleteRecipeList = () => {
    return recipes.filter((recipe) => {
      return (
        // not in recipeValue already
        recipeValue.indexOf(recipe) === -1 &&
        // search text length is not 0 or recipe's title includes search text
        (text.length == 0 ||
          recipe.title.toLowerCase().indexOf(text.toLowerCase()) !== -1)
      );
    });
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.header}>Meal Planning</Text>

      <Text>How many days would you like to plan for?</Text>
      <InputSpinner
        style={styles.input}
        max={recipes.length}
        min={1}
        step={1}
        colorMax={"#f04048"}
        colorMin={"#40c5f4"}
        value={inputValue}
        onChange={(num) => {
          setInputValue(num);
          setRecipeValue([...recipeValue.slice(0, num)]);
        }}
      />

      <Text>{"\n"}</Text>

      <Text>Would you like to include any specific recipes?</Text>
      {recipeValue.map((recipe) => {
        return (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => {
              setRecipeValue([
                ...recipeValue.filter((value) => recipe !== value),
              ]);
            }}
          >
            <Text style={{ fontSize: 15, color: colors.primary }}>
              {" "}
              - {recipe.title}
            </Text>
          </TouchableOpacity>
        );
      })}

      <Autocomplete
        containerStyle={styles.autocompleteContainer}
        data={getAutocompleteRecipeList()}
        defaultValue={text}
        onChangeText={(text) => setText(text)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (recipeValue.length < inputValue) {
                setRecipeValue([...recipeValue, item]);
              }
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
      </Text>

      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <Button title="Generate Meal Plan" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    margin: 15,
    fontWeight: "bold",
  },
  input: {
    alignSelf: "center",
  },
  container: {},
  autocompleteContainer: {
    padding: 10,
    width: "80%",
    // alignSelf: "flex-end",
  },
});

export default PlannerScreen;
