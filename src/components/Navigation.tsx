import React from 'react';
import CardNav from './CardNav';

export const Navigation: React.FC = () => {
  const items = [
    {
      label: "Profile",
      href: "#experience",
      bgColor: "#0A0A0C",
      textColor: "#fff",
      links: [
        { label: "Experience", href: "#experience", ariaLabel: "Experience" },
        { label: "Skills", href: "#skills", ariaLabel: "Skills" }
      ]
    },
    {
      label: "Work", 
      href: "#work",
      bgColor: "#0A0A0C",
      textColor: "#fff",
      links: [
        { label: "Selected Projects", href: "#work", ariaLabel: "Selected Projects" },
        { label: "Case Studies", href: "#work", ariaLabel: "Case Studies" }
      ]
    },
    {
      label: "Connect",
      href: "#contact",
      bgColor: "#D4FF00", 
      textColor: "#000",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/kshiteej-mali-745454295/", ariaLabel: "LinkedIn" },
        { label: "GitHub", href: "https://github.com/kshiteej-mali", ariaLabel: "GitHub" },
        { label: "Instagram", href: "https://www.instagram.com/kshiteejmali/", ariaLabel: "Instagram" },
        { label: "Call", href: "tel:+918600497292", ariaLabel: "Call +91 8600497292" }
      ]
    }
  ];

  return (
    <CardNav
      items={items}
      baseColor="#08080A"
      menuColor="#fff"
      buttonBgColor="#D4FF00"
      buttonTextColor="#000"
      ease="power3.out"
      className="fixed z-50 top-6 w-full"
    />
  );
};
