import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "../components/ImageInput";
import Button from "../components/Button";
import Screen from "../components/Screen";
import colors from "../config/colors";
import * as Yup from "yup";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/AppFormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  subtitle: Yup.string().required().label("Subtitle"),
  ingredients: Yup.string().required().label("Ingredients"),
  method: Yup.string().required().label("Method"),
});

function CreateRecipeScreen(props) {
  const [fieldValue, setFieldValue] = useState();

  const handleAdd = (uri) => {
    setFieldValue(uri);
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ title: "", subtitle: "", ingredients: "", method: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <ScrollView style={{ flex: 1 }}>
          {/* Image is not currently being incorporated in the formik object */}
          <FormImagePicker size={{ height: 200, width: "100%" }} />

          <FormField
            autoCorrect={false}
            icon="text-short"
            name="title"
            placeholder="Title"
          />
          <FormField
            autoCorrect={false}
            icon="text"
            name="subtitle"
            placeholder="Subtitle"
          />
          <FormField
            autoCorrect={false}
            icon="food-apple-outline"
            name="ingredients"
            placeholder="Ingredients"
          />
          <FormField
            autoCorrect={false}
            icon="script-text-outline"
            name="method"
            placeholder="Method"
          />
        </ScrollView>
        <View style={{ margin: 20, marginTop: 0 }}>
          <SubmitButton title="Create Recipe" />
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export default CreateRecipeScreen;
