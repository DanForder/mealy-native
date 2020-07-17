import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CollapsibleList from "./CollapsibleList";

function Recipe({ recipe }) {
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [methodsOpen, setMethodsOpen] = useState(true);

  return (
    <View style={styles.recipe}>
      <CollapsibleList
        open={ingredientsOpen}
        setOpen={setIngredientsOpen}
        listItems={recipe.ingredients}
        title="Ingredients"
      />
      <CollapsibleList
        open={methodsOpen}
        setOpen={setMethodsOpen}
        listItems={recipe.method}
        title="Method"
        numbered
      />
    </View>
  );
}

const styles = StyleSheet.create({
  recipe: { padding: 10 },
});

export default Recipe;
