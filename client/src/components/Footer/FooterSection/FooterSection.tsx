import React from "react";
import { Link } from "react-router-dom";

interface FooterSectionProps {
  title: string;
  items: string[];
  containerClass: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  containerClass,
}) => {
  return (
    <div className={containerClass}>
      <h3 className="mb-2 font-medium">{title}</h3>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <Link to="/" key={index} className="hover:underline">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
