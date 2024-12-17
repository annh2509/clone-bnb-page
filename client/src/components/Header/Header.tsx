import { Divider, MenuProps } from "antd";
import { map } from "lodash";
import React, { useState } from "react";
import Auth from "../../pages/Auth/Auth";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import HeaderSearch from "./Search/Search";

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

  const showModal = (type: "login" | "signup") => {
    setAuthType(type);
    setIsModalOpen(true);
  };

  const items: MenuProps["items"] = [
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div>
        <div className="flex justify-between items-center px-12 py-4 max-sm:hidden max-md:hidden">
          <LeftSection />
          <div className="center flex items-center gap-4">
            {map(tabHeader, (tab) => (
              <span
                key={tab.id}
                className={`cursor-pointer text-[#6a6a6a] font-medium border border-transparent p-2 hover:bg-[#F7F7F7] hover:border hover:rounded-3xl hover:p-2 ${
                  activeTabId === tab.id ? "text-black" : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </span>
            ))}
          </div>
          <RightSection items={items} />
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
