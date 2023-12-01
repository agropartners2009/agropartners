"use client";

import Link from "next/link";
import Image from "next/image";
import "./styles.css";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import AOS from "aos";

const HeaderNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
    AOS.refresh();
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Image
        id="burgerMenu"
        src="/burger.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={toggleOpen}
      />
      {isOpen && (
        <nav
          id="dropdownMenu"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="200"
        >
          <Link className="headerLink" href={`/${locale}`} onClick={toggleOpen}>
            {t("Home")}
          </Link>
          <Link
            className="headerLink"
            href={`/${locale}/shareholder`}
            onClick={toggleOpen}
          >
            {t("To_shareholders")}
          </Link>
          <Link
            className="headerLink"
            href={
              localStorage.getItem("isAdmin")
                ? `/${locale}/admin/news`
                : `/${locale}/news`
            }
            onClick={toggleOpen}
          >
            {t("News")}
          </Link>
          <Link
            className="headerLink"
            href={
              localStorage.getItem("isAdmin")
                ? `/${locale}/admin/vacancies`
                : `/${locale}/vacancies`
            }
            onClick={toggleOpen}
          >
            {t("Vacancies")}
          </Link>
        </nav>
      )}
      <nav id="headerNav">
        <Link className="headerLink" href={`/${locale}`}>
          {t("Home")}
        </Link>
        <Link className="headerLink" href={`/${locale}/shareholder`}>
          {t("To_shareholders")}
        </Link>
        <Link
          className="headerLink"
          href={
            localStorage.getItem("isAdmin")
              ? `/${locale}/admin/news`
              : `/${locale}/news`
          }
        >
          {t("News")}
        </Link>
        <Link
          className="headerLink"
          href={
            localStorage.getItem("isAdmin")
              ? `/${locale}/admin/vacancies`
              : `/${locale}/vacancies`
          }
        >
          {t("Vacancies")}
        </Link>
      </nav>
    </>
  );
};

export default HeaderNav;
