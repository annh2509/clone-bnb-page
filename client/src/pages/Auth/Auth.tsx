import { CloseOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import type { FormProps } from "antd";
import { Divider, Form, message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/auth";
import "./auth.scss";
import AuthForm from "./components/AuthForm";
import {
  AuthType,
  FieldTypeAuthForm,
  IAuth,
  ILogin,
  ISignup,
} from "./types/auth";

interface AuthProps {
  isModalOpen: boolean;
  authType: string;
  onOk: () => void;
  onCancel: () => void;
}

const Auth: React.FC<AuthProps> = ({
  isModalOpen,
  onOk,
  onCancel,
  authType,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const loginMutate = useMutation({
    mutationFn: (values: ILogin) => {
      return authApi.login(values);
    },
    onError: () => {
      message.error("Invalid phone number or password!");
    },
    onSuccess: (data) => {
      message.success("Login successful!");
      onCancel();
      localStorage.setItem(
        "accessToken",
        (data as unknown as IAuth).accessToken
      );
      const user = {
        id: (data as unknown as IAuth).user.id,
        phone: (data as unknown as IAuth).user.phone,
      };
      localStorage.setItem("profile", JSON.stringify(user));
      navigate("/", {
        replace: true,
      });
    },
  });

  const signupMutate = useMutation({
    mutationFn: (values: ISignup) => {
      return authApi.signup(values);
    },
    onError: () => {
      message.error("Invalid phone number or password!");
    },
    onSuccess: (data) => {
      message.success("Signup successful!");
      onCancel();
      localStorage.setItem(
        "accessToken",
        (data as unknown as IAuth).accessToken
      );
      const user = {
        id: (data as unknown as IAuth).user.id,
        phone: (data as unknown as IAuth).user.phone,
      };
      localStorage.setItem("profile", JSON.stringify(user));
      navigate("/", {
        replace: true,
      });
    },
  });

  const onFinish: FormProps<FieldTypeAuthForm>["onFinish"] = (values) => {
    if (authType === AuthType.LOGIN) {
      loginMutate.mutate({
        username: values.phoneNumber,
        password: values.password,
      });
    } else if (authType === AuthType.SIGNUP) {
      signupMutate.mutate({
        phone: values.phoneNumber,
        password: values.password,
      });
    }
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldTypeAuthForm>["onFinishFailed"] = (
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
          <AuthForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </div>
      </div>
    </Modal>
  );
};

export default Auth;
