import "./styles.css";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations();

  return (
    <footer>
      <div id="contactCard">
        <div className="contactCardItem">
          <h4 className="itemTitle">{t("Address")}:</h4>
          {t("address_value")}
        </div>
        <div className="contactCardItem">
          <h4 className="itemTitle">{t("Phone")}:</h4>+38 (099) 179 73 06
        </div>
        <div className="contactCardItem">
          <h4 className="itemTitle">{t("Email")}:</h4>
          agropartneru2009@gmail.com
        </div>
      </div>
      <span className="copyrights">
        {t("copyrights")} Agropartnery-2009 &copy; 2023
      </span>
    </footer>
  );
};

export default Footer;
