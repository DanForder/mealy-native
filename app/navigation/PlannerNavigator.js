import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PlannerScreen from "../screens/PlannerScreen";
import PlannerDetailsScreen from "../screens/PlannerDetailsScreen";

const Stack = createStackNavigator();

const PlannerNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ title: "Meal Planning" }}
      name="Planner"
      component={PlannerScreen}
    />
    <Stack.Screen
      options={{ title: "Plan Details" }}
      name="PlannerDetails"
      component={PlannerDetailsScreen}
    />
  </Stack.Navigator>
);

export default PlannerNavigator;
