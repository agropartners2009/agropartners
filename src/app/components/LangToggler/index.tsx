"use client";

import { locales } from "@/middleware";
import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import "./styles.css";
import { useEffect, useState } from "react";
import ukImg from "../../../../public/uk.png";
import enImg from "../../../../public/en.png";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export type langItem = { label: string; value: string; img: any };
export const langs: langItem[] = [
  { label: "UA", value: "uk", img: ukImg },
  { label: "EN", value: "en", img: enImg },
];

const LangToggler: React.FC = () => {
  const locale = useLocale();
  const pathName = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<langItem>(langs[0]);

  useEffect(() => {
    setSelectedItem(langs.find((lang) => lang.value === locale) ?? langs[0]);
  }, [locale]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: langItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    router.push(pathName, { locale: item.value });
  };

  return selectedItem ? (
    <div id="langList">
      {langs.map((item) => (
        <div
          key={item.value}
          onClick={() => handleItemClick(item)}
          className="langIcon"
          style={{
            backgroundImage: `url(${item.img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="langIconText">{item.label}</span>
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
};

export default LangToggler;
