import { FormEditor, FormCanvas } from "@roddan/form-editor";
import { customElement } from "./customEl";

export default function EditorForm() {
  return (
    <FormEditor 
      mode="form"
      customElements={[customElement]}
    >
      <FormCanvas />
    </FormEditor>
  );
}
