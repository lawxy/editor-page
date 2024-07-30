import React from "react";
import { Form, Input, Button } from "antd";
// import {
//   FormEditor,
//   Material,
//   Settings,
//   FormCanvas,
// } from "@roddan/form-editor";

export default function HomePage() {
  const [form] = Form.useForm();
  const handleClick = async () => {
    await form.validateFields();
  };
  return (
    // <FormEditor mode="design">
    //   <Material />
    //   <FormCanvas />
    //   <Settings />
    // </FormEditor>
    <Form form={form}>
      <Form.Item name="name" rules={[{ required: true, message: "必填" }]}>
        <Input />
      </Form.Item>
      <Button onClick={handleClick}>校验</Button>
    </Form>
  );
}
