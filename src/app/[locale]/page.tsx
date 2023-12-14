import {
  useLocale,
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import "./styles.css";
import InfoList from "./components/InfoList";

const Home: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const messages = useMessages();

  return (
    <div id="homePage" className="defaultPage">
      <div id="introContainer">
        <div id="mainTitle">
          <div id="AGRO">{t("AGRO")}</div>
          <div id="col">
            <span id="num">2009</span>
            <span id="partners">{t("partners")}</span>
          </div>
        </div>
        <span className="intro">{t("intro")}</span>
        <span className="intro">{t("intro_1")}</span>
      </div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <InfoList />
      </NextIntlClientProvider>
    </div>
  );
};

export default Home;
