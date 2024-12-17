import React from "react";
import HeaderLayout from "../../components/Header/Header";
import FooterLayout from "../../components/Footer/Footer";

const DefaultLayout = ({ children }: any) => {
  return (
    <React.Fragment>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </React.Fragment>
  );
};

export default DefaultLayout;
