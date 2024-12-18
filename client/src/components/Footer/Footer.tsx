import React from "react";
import FooterSection from "./FooterSection/FooterSection";

const footerSections = [
  {
    title: "Support",
    items: [
      "Help Center",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighborhood concern",
    ],
    containerClass: "py-4",
  },
  {
    title: "Hosting",
    items: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Airbnb-friendly apartments",
      "Join a free Hosting class",
      "Find a co-host",
    ],
    containerClass: "border-t py-4 sm:border-t-2 lg:border-none",
  },
  {
    title: "Airbnb",
    items: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
    containerClass: "border-t py-4 sm:border-t-2 lg:border-none",
  },
];

const FooterLayout: React.FC = () => {
  return (
    <footer className="px-12 py-4 mt-10 bg-[#F7F7F7]">
      <h2 className="text-2xl font-bold mb-2">
        Inspiration for future getaways
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {footerSections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            items={section.items}
            containerClass={section.containerClass}
          />
        ))}
      </div>
    </footer>
  );
};

export default FooterLayout;
