import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const recipes = [
  {
    id: 1,
    title: "Avocado & black bean eggs",
    subTitle: "Time for a tasty debrief",
    image: require("../assets/images/avocado_blackbean_eggs.jpg"),
    ingredients: [
      "2 tsp rapeseed oil",
      "1 red chilli, deseeded and thinly sliced",
      "1 large garlic clove, sliced",
      "2 large eggs",
      "400g can black beans",
      "½ x 400g can cherry tomatoes",
      "¼ tsp cumin seeds",
      "1 small avocado, halved and sliced",
      "handful fresh, chopped coriander",
      "1 lime, cut into wedges",
    ],
    method: [
      "Heat the oil in a large non-stick frying pan. Add the chilli and garlic and cook until softened and starting to colour. Break in the eggs on either side of the pan. Once they start to set, spoon the beans (with their juice) and the tomatoes around the pan and sprinkle over the cumin seeds. You’re aiming to warm the beans and tomatoes rather than cook them.",
      "Remove the pan from the heat and scatter over the avocado and coriander. Squeeze over half of the lime wedges. Serve with the remaining wedges on the side for squeezing over.",
    ],
  },
  {
    id: 2,
    title: "Spicy tofu kedgeree",
    subTitle: "Tofu-licious!",
    image: require("../assets/images/spicy-tofu-kedgeree.jpg"),
    ingredients: [
      "140g basmati rice",
      "2 eggs",
      "1 tbsp olive oil",
      "1 onion, chopped",
      "1 red chilli, chopped",
      "2 tbsp medium curry powder",
      "1 tsp brown or black mustard seeds",
      "2-3 pinches cayenne pepper",
      "100g marinated tofu (we used Cauldron)",
      "½ bunch spring onions, sliced",
      "handful flat-leaf parsley, chopped",
    ],
    method: [
      "Cook the rice and boil the eggs in the same pan for 8-9 mins. Meanwhile, heat oil in a non-stick frying pan and soften the onion and chilli for 5 mins. Add all the spices and fry for 1-2 mins more.",
      "Drain the rice and stir into the spicy onion with a splash of water and the tofu. Season well, then heat through gently for a few mins until piping hot. Peel and quarter the boiled eggs. Stir the spring onions and parsley into the rice, divide between 2 bowls and top with the eggs.",
    ],
  },
  {
    id: 3,
    title: "Sweet potato & cauliflower lentil bowl",
    subTitle: "Zingy vegan goodness",
    image: require("../assets/images/sweet-potato-bowl.jpg"),
    ingredients: [
      "1 large sweet potato, skin left on, scrubbed and cut into medium chunks",
      "1 cauliflower, cut into large florets, stalk diced",
      "1 tbsp garam masala",
      "3 tbsp groundnut oil",
      "2 garlic cloves",
      "200g puy lentils",
      "thumb-sized piece ginger, grated",
      "1 tsp Dijon mustard",
      "1½ limes, juiced",
      "2 carrots",
      "¼ red cabbage",
      "½ small pack coriander",
    ],
    method: [
      "Heat oven to 200C/180C fan/gas 6. Toss the sweet potato and cauliflower with the garam masala, half the oil and some seasoning. Spread out on a large roasting tray. Add the garlic and roast for 30-35 mins until cooked.",
      "Meanwhile, put the lentils in a saucepan with 400ml cold water. Bring to the boil, then simmer for 20-25 mins until the lentils are cooked but still have some bite. Drain.",
      "Remove the garlic cloves from the tray and squish them with the blade of your knife. Put the garlic in a large bowl with the remaining oil, ginger, mustard, a pinch of sugar and one-third of the lime juice. Whisk, then tip in the warm lentils, stir and season to taste. Coarsely grate the carrots, shred the cabbage and roughly chop the coriander. Squeeze over the remaining lime juice and season to taste.",
      "Divide the lentil mixture between four bowls (or four containers if saving and chilling). Top each serving with a quarter of the carrot slaw and a quarter of the sweet potato and cauliflower mix.",
    ],
  },
];

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
    backgroundColor: colors.light,
  },
});

export default RecipesScreen;
