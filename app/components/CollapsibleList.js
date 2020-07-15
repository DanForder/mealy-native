import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import Text from "./Text";

function CollapsibleList({
  open,
  listItems,
  numbered = false,
  setOpen,
  title,
}) {
  const chevron = open
    ? { icon: "chevron-up-circle", color: "indianred" }
    : { icon: "chevron-down-circle", color: "darkslategray" };

  const height = open ? "auto" : 0;

  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: 8,
        marginBottom: 15,
      }}
    >
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <MaterialCommunityIcons
            name={chevron.icon}
            size={28}
            color={chevron.color}
          />
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          height: height,
          overflow: "hidden",
        }}
      >
        {listItems.map((i, index) => (
          <Text style={styles.listText} key={i}>
            {numbered ? index + 1 + ". " + i : "\u2022 " + i}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  listText: { padding: 5, paddingLeft: 15 },
  title: { fontWeight: "bold" },
});

export default CollapsibleList;
