import React from "react";
import RecipeNavigator from "./RecipeNavigator";
import PlannerNavigator from "./PlannerNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PlannerScreen from "../screens/PlannerScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      component={RecipeNavigator}
      name="Recipes"
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="food-variant"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      component={PlannerNavigator}
      name="Planner"
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="timetable" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      component={Screen}
      name="Settings"
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="cogs" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
