import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Text from "./Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import Autocomplete from "react-native-autocomplete-input";
import InputSpinner from "react-native-input-spinner";
import colors from "../config/colors";

function PlannerInput({ recipes }) {
  const [inputValue, setInputValue] = useState(3);

  // const [recipeValue, setRecipeValue] = useState([]);
  // const [text, setText] = useState("");

  // const getAutocompleteRecipeList = () => {
  //   return recipes.filter((recipe) => {
  //     return (
  //       // not in recipeValue already
  //       recipeValue.indexOf(recipe) === -1 &&
  //       // search text length is not 0 or recipe's title includes search text
  //       (text.length == 0 ||
  //         recipe.title.toLowerCase().indexOf(text.toLowerCase()) !== -1)
  //     );
  //   });
  // };

  return (
    <>
      {/* 
      <Text>Would you like to include any specific recipes?</Text>

      <Autocomplete
        listContainerStyle={styles.listContainerStyle}
        containerStyle={styles.autocompleteContainer}
        data={getAutocompleteRecipeList()}
        defaultValue={text}
        onChangeText={(text) => setText(text)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("pressed");
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
      })} */}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    alignSelf: "center",
  },
  listContainerStyle: { height: 100 },
  autocompleteContainer: {
    padding: 10,
    height: 150,
  },
});

export default PlannerInput;
