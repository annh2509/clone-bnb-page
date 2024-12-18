import React from "react";
import { Form, Input, Button } from "antd";
import type { FormProps } from "antd";
import { FieldTypeAuthForm } from "../types/auth";

interface AuthFormProps {
  onFinish: FormProps<FieldTypeAuthForm>["onFinish"];
  onFinishFailed: FormProps<FieldTypeAuthForm>["onFinishFailed"];
}

const AuthForm: React.FC<AuthFormProps> = ({ onFinish, onFinishFailed }) => (
  <Form
    name="auth-form"
    size="large"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      name="phoneNumber"
      rules={[
        { required: true, message: "Please input your phone number!" },
        { pattern: /^[0-9]+$/, message: "Please input only numbers!" },
      ]}
    >
      <Input placeholder="Phone number" type="tel" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        { required: true, message: "Please input your password!" },
        { min: 6, message: "Password must be at least 6 characters long!" },
      ]}
    >
      <Input.Password placeholder="Password" />
    </Form.Item>
    <span className="block py-2">
      We’ll call or text you to confirm your number. Standard message and data
      rates apply.{" "}
      <a
        target="_blank"
        href="https://www.airbnb.com/help/article/2855"
        className="underline font-medium"
      >
        Privacy Policy
      </a>
    </span>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form.Item>
  </Form>
);

export default AuthForm;
