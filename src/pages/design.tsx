import { useState } from "react";
import {
  FormEditor,
  Material,
  Settings,
  FormCanvas,
} from "@roddan/form-editor";

export default function EditorDesgin() {
  const [loading, setLoading] = useState(false);
  return (
    <FormEditor
      mode="design"
      actionProp={{
        previewUrl: "/editor-page/form",
        download() {
          if (loading) return;
          setLoading(true);
          console.log("download");
          try {
            const link = document.createElement("a");
            link.href = "https://roddan.cn/editor-assets/page.zip";
            link.download = "page.zip"; // 你可以指定下载的文件名
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } catch (error) {
            console.error("Error downloading the file:", error);
          } finally {
            setLoading(false);
          }
        },
      }}
    >
      <Material />
      <FormCanvas />
      <Settings />
    </FormEditor>
  );
}
