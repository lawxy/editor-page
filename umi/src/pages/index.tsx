import yayJpg from "../assets/yay.jpg";
import React from "react";
import {
  FormEditor,
  Material,
  Settings,
  FormCanvas,
} from "@roddan/form-editor";

export default function HomePage() {
  return (
    <FormEditor mode="design">
      <Material />
      <FormCanvas />
      <Settings />
    </FormEditor>
  );
}
