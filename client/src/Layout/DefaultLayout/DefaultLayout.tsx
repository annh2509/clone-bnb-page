import React from "react";
import HeaderLayout from "../../components/Header/Header";

const DefaultLayout = ({ children }: any) => {
  return (
    <React.Fragment>
      <HeaderLayout />
      {children}
    </React.Fragment>
  );
};

export default DefaultLayout;
