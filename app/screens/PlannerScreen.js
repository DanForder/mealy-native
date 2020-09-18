import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Text from "../components/Text";
import { recipes } from "../data/recipes";

function PlannerScreen({ navigation }) {
  const [daysToGenerate, setDaysToGenerate] = useState(3);
  // const [planArray, setPlanArray] = useState([]);

  const getRandomFromArray = (array, numberToReturn) => {
    // Shuffle array
    const shuffled = array.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, numberToReturn);

    return selected;
  };

  const handleGenerateMealPlan = () => {
    const newPlanArray = getRandomFromArray(recipes, daysToGenerate);
    // setPlanArray(newPlanArray);
    navigation.navigate("PlannerDetails", newPlanArray);
  };

  return (
    <Screen style={styles.screen}>
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: "center" }}>
          How many days would you like to plan for?
          {"\n"}
        </Text>

        <InputSpinner
          style={{ alignSelf: "center" }}
          max={recipes.length}
          min={1}
          step={1}
          colorMax={"#f04048"}
          colorMin={"#40c5f4"}
          value={daysToGenerate}
          onChange={(num) => {
            setDaysToGenerate(num);
          }}
        />
      </View>

      <Button title="Generate Meal Plan" onPress={handleGenerateMealPlan} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    margin: 15,
    fontWeight: "bold",
  },
  screen: {
    padding: 20,
  },
});

export default PlannerScreen;
