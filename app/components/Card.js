import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import Text from "./Text.js";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: "50%" }}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          {/* <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    height: 250,
    marginLeft: 5,
    marginRight: 5,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: 16,
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
