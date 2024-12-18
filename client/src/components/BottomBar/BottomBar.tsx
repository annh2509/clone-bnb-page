import React, { useState } from "react";
import Auth from "../../pages/Auth/Auth";
import authApi from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { AuthType } from "../../pages/Auth/types/auth";

interface BottomBarProps {
  isVisible: boolean;
}

const BottomBar: React.FC<BottomBarProps> = ({ isVisible }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [authType, setAuthType] = useState<string>("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile") as string);

  const showModal = (type: AuthType) => {
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

  const handleLogout = async () => {
    await authApi.logout();
    navigate("/");
    localStorage.removeItem("profile");
    localStorage.removeItem("accessToken");
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
          {!user && (
            <div
              className="cursor-pointer"
              onClick={() => showModal(AuthType.SIGNUP)}
            >
              Sign up
            </div>
          )}
          {!user && (
            <div
              className="cursor-pointer"
              onClick={() => showModal(AuthType.LOGIN)}
            >
              Log in
            </div>
          )}
          {user && (
            <div className="cursor-pointer" onClick={handleLogout}>
              Logout
            </div>
          )}
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
