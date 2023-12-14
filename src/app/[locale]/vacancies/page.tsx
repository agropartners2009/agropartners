"use client";

import "./styles.css";
import { useEffect, useState } from "react";
import List from "@/app/components/List";
import { ItemType } from "@/app/components/ListItem";
import { useLocale } from "next-intl";
import { getVacancies } from "../api";

export type VacancyType = ItemType & {};

const VacanciesPage: React.FC = () => {
  const locale = useLocale();
  const [vacancies, setVacancies] = useState<VacancyType[]>([]);

  useEffect(() => {
    const getData = async () => {
      return await getVacancies(locale);
    };
    getData().then((res) => setVacancies(res));
  }, [locale]);

  return (
    <div id="vacanciesPage" className="defaultPage">
      <div id="vacanciesPageBack" />
      <List items={vacancies} />
    </div>
  );
};

export default VacanciesPage;
