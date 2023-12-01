import { useTranslations } from "next-intl";
import "./styles.css";
import fields from "../../../../../public/fields.jpg";
import pig from "../../../../../public/pig.jpg";
import seeds from "../../../../../public/seeds.jpg";

const InfoList: React.FC = () => {
  const t = useTranslations();

  return (
    <div id="infoList">
      <div className="infoContainer" data-aos="fade-right">
        <div
          className="infoImg"
          style={{
            background: `url(${fields.src})`,
            backgroundPosition: "left 310px top 0px",
            backgroundSize: "cover",
          }}
        />
        <div className="info">
          <span>{t("commonInfo1_1")}</span>
          <span>{t("commonInfo1_2")}</span>
        </div>
      </div>
      <div className="infoContainer" data-aos="fade-right">
        <div
          className="infoImg"
          style={{
            background: `url(${pig.src})`,
            backgroundPosition: "left 310px top 0px",
            backgroundSize: "cover",
          }}
        />
        <div className="info">
          <span>{t("commonInfo2_1")}</span>
          <span>{t("commonInfo2_2")}</span>
          <span>{t("commonInfo2_3")}</span>
        </div>
      </div>
      <div className="infoContainer" data-aos="fade-right">
        <div
          className="infoImg"
          style={{
            background: `url(${seeds.src})`,
            backgroundPosition: "left 320px top 0px",
            backgroundSize: "cover",
          }}
        />
        <div className="info">
          <span>{t("commonInfo3_1")}</span>
          <span>{t("commonInfo3_2")}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoList;
