import React, { useState } from "react";
import ImageInput from "../ImageInput";

function FormImagePicker({ size }) {
  const [imageUri, setImageUri] = useState();

  const handleChange = (uri) => {
    uri ? setImageUri(uri) : setImageUri();
  };

  return (
    <ImageInput imageUri={imageUri} onChangeImage={handleChange} size={size} />
  );
}

export default FormImagePicker;
