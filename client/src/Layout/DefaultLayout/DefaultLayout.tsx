import React, { ReactNode, useCallback, useEffect, useState } from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import FooterLayout from "../../components/Footer/Footer";
import HeaderLayout from "../../components/Header/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <React.Fragment>
      <HeaderLayout />
      {children}
      <FooterLayout />
      <BottomBar isVisible={isVisible} />
    </React.Fragment>
  );
};

export default DefaultLayout;
