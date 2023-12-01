import "./styles.css";
import HeaderNav from "./HeaderNav";
import Image from "next/image";
import LangToggler from "../LangToggler";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Link from "next/link";

const Header: React.FC = () => {
  const locale = useLocale();
  const messages = useMessages();
  return (
    <header>
      <Link href={`/${locale}`}>
        <div id="logo">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <h1 id="logoTitle">АГРОПАРТНЕРИ 2009</h1>
        </div>
      </Link>
      <div id="tools">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeaderNav />
        </NextIntlClientProvider>
        <LangToggler />
      </div>
    </header>
  );
};

export default Header;
