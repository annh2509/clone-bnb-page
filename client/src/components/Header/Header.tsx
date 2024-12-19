import { Divider, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/auth";
import Auth from "../../pages/Auth/Auth";
import LogoSection from "./LogoSection/LogoSection";
import AccountActions from "./AccountActions/AccountActions";
import HeaderSearch from "./Search/Search";
import TabSelector from "./TabSelector/TabSelector";

const tabHeader = [
  {
    id: 1,
    title: "Stays",
  },
  {
    id: 2,
    title: "Experiences",
  },
];

const HeaderLayout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [authType, setAuthType] = useState<string>("");
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile") as string);
  const token = localStorage.getItem("accessToken");

  const showModal = (type: "login" | "signup") => {
    setAuthType(type);
    setIsModalOpen(true);
  };

  const menuItems: MenuProps["items"] = user
    ? [
        {
          key: "4",
          label: "Gift cards",
        },
        {
          key: "5",
          label: "Airbnb your home",
        },
        {
          key: "6",
          label: "Host an experience",
        },
        {
          key: "7",
          label: "Help Center",
        },
        {
          type: "divider",
        },
        {
          key: "3",
          label: "Logout",
          onClick: async () => {
            await authApi.logout();
            navigate("/");
            localStorage.removeItem("profile");
            localStorage.removeItem("accessToken");
          },
        },
      ]
    : [
        {
          key: "0",
          label: <span>Sign up</span>,
          onClick: () => showModal("signup"),
        },
        {
          key: "1",
          label: <span>Login</span>,
          onClick: () => showModal("login"),
        },
        {
          type: "divider",
        },
        {
          key: "3",
          label: "Gift cards",
        },
        {
          key: "4",
          label: "Airbnb your home",
        },
        {
          key: "5",
          label: "Host an experience",
        },
        {
          key: "6",
          label: "Help Center",
        },
      ];

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAuthType("");
  };

  const handleTabClick = (tabId: number) => {
    setActiveTabId(tabId);
  };

  useEffect(() => {
    if (!user && token) {
      const fetchProfile = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const res = await authApi.getProfile(token as string);
          localStorage.setItem("profile", JSON.stringify(res?.data?.user));
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    }
  }, [user, token]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div>
        <div className="flex justify-between items-center px-12 py-4 max-sm:hidden max-md:hidden">
          <LogoSection />
          <TabSelector
            tabs={tabHeader}
            activeTabId={activeTabId}
            onTabClick={handleTabClick}
          />
          <AccountActions menuItems={menuItems} />
        </div>
        <HeaderSearch />
      </div>
      <Divider />
      {isModalOpen && (
        <Auth
          isModalOpen={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          authType={authType}
        />
      )}
    </header>
  );
};

export default HeaderLayout;
