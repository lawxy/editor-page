import {
  FormEditor,
  Material,
  Settings,
  FormCanvas,
} from "@roddan/form-editor";

export default function EditorDesgin() {
  return (
    <FormEditor
      mode="design"
      actionProp={{
        previewUrl: "/editor-page/form",
      }}
    >
      <Material />
      <FormCanvas />
      <Settings />
    </FormEditor>
  );
}
