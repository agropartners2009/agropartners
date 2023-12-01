import "./styles.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ShareholderPage: React.FC = () => {
  const t = useTranslations();

  return (
    <div id="shareholderPage">
      <div className="serviceCard">
        <div className="serviceCardTitle">
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
          <h4>{t("LAND_RENT")}</h4>
        </div>
        <div className="serviceCardBody">
          <h6>{t("rent_list_title")}</h6>
          <ul className="serviceCardList list-disc">
            <li>{t("rent_list_item1")}</li>
            <li>{t("rent_list_item2")}</li>
            <li>{t("rent_list_item3")}</li>
            <li>{t("rent_list_item4")}</li>
            <li>{t("rent_list_item5")}</li>
            <li>{t("rent_list_item6")}</li>
            <li>{t("rent_list_item7")}</li>
            <li>{t("rent_list_item8")}</li>
            <li>{t("rent_list_item9")}</li>
          </ul>
          <span>
            {t("rent_list_prompt")}{" "}
            <span className="phoneNumber">+38 (099) 179 73 06</span>.
          </span>
        </div>
      </div>
      <div className="serviceCard">
        <div className="serviceCardTitle">
          <Image src="/logo.svg" alt="logo" width={24} height={24} />
          <h4>{t("PURCHASE_OF_LAND")}</h4>
        </div>
        <div className="serviceCardBody">
          <p>{t("purchase_parag1")}</p>
          <p>
            {t("purchase_parag2")}{" "}
            <span className="phoneNumber">+38 (099) 179 73</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareholderPage;
