import { Dropdown, MenuProps } from "antd";
import React from "react";
import AccountIcon from "./icons/AccountIcon";
import MenuIcon from "./icons/MenuIcon";
import WorldIcon from "./icons/WorldIcon";

interface AccountActionsProps {
  menuItems: MenuProps["items"];
}

const AccountActions: React.FC<AccountActionsProps> = ({ menuItems }) => {
  return (
    <div className="right">
      <div className="flex justify-center gap-4">
        <div className="flex justify-center items-center gap-4">
          <span className="font-medium cursor-pointer border border-transparent p-2 hover:bg-[#F7F7F7] hover:border hover:rounded-3xl hover:p-2">
            Airbnb your home
          </span>
          <div className="border border-transparent p-2 cursor-pointer hover:bg-[#F7F7F7] hover:border hover:rounded-3xl hover:p-2">
            <WorldIcon />
          </div>
        </div>
        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
          <div className="flex items-center gap-2 px-4 py-2 border border-[#DDDDDD] rounded-3xl cursor-pointer">
            <div className="text-[#6a6a6a]">
              <MenuIcon />
            </div>
            <div className="text-[#6a6a6a] w-[32px] h-[32px]">
              <AccountIcon />
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default AccountActions;
