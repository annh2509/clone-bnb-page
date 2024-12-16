import { CloseOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Modal } from "antd";
import type { FormProps } from "antd";
import "./auth.scss";

interface AuthProps {
  isModalOpen: boolean;
  authType: string;
  onOk: () => void;
  onCancel: () => void;
}

type FieldType = {
  phoneNumber: string;
  password: string;
};

const Auth: React.FC<AuthProps> = ({
  isModalOpen,
  onOk,
  onCancel,
  authType,
}) => {
  console.log("🚀 ~ authType:", authType);
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Login or sign up"
      open={isModalOpen}
      onOk={onOk}
      onCancel={handleCancel}
      footer={[]}
      centered
      closeIcon={<CloseOutlined />}
      className="auth-modal"
      maskClosable={false}
    >
      <Divider />
      <div className="px-[24px]">
        <h2 className="text-xl font-semibold">Welcome to Airbnb</h2>
        <div className="auth-form py-4">
          <Form
            name="login"
            form={form}
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
                {
                  min: 6,
                  message: "Password must be at least 6 characters long!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <span className="block py-2">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
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
        </div>
      </div>
    </Modal>
  );
};

export default Auth;
