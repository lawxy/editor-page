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
        download() {
          try {
            const link = document.createElement('a');
            link.href = 'https://roddan.cn/editor-assets/page.zip';
            link.download = 'page.zip'; // 你可以指定下载的文件名
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } catch (error) {
            console.error('Error downloading the file:', error);
          }
        }
      }}
    >
      <Material />
      <FormCanvas />
      <Settings />
    </FormEditor>
  );
}
