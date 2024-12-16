import { useState } from "react";
import Auth from "./pages/Auth/Auth";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [authType, setAuthType] = useState<string>("");

  const showModal = (type: "login" | "signup") => {
    setAuthType(type);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAuthType("");
  };
  return (
    <section>
      <h1
        className="text-3xl text-red-600 font-bold underline"
        onClick={() => showModal("login")}
      >
        Login
      </h1>
      <h1
        className="text-3xl text-red-600 font-bold underline"
        onClick={() => showModal("signup")}
      >
        Singup
      </h1>
      <Auth
        isModalOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        authType={authType}
      />
    </section>
  );
}

export default App;
