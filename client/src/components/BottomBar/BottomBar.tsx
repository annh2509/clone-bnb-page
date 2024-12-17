import React, { useState } from "react";
import Auth from "../../pages/Auth/Auth";

interface BottomBarProps {
  isVisible: boolean;
}

const BottomBar: React.FC<BottomBarProps> = ({ isVisible }) => {
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
    <div>
      <div
        className={`flex-none hidden w-full bottom-0 left-0 z-1 bg-[#ffffff] transition-transform duration-300 max-sm:fixed max-sm:block max-md:fixed max-md:block ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center gap-8 py-4 text-sm font-light">
          <div className="cursor-pointer">Explore</div>
          <div className="cursor-pointer" onClick={() => showModal("signup")}>
            Sign up
          </div>
          <div className="cursor-pointer" onClick={() => showModal("login")}>
            Log in
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Auth
          isModalOpen={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          authType={authType}
        />
      )}
    </div>
  );
};

export default BottomBar;
