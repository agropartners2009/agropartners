"use client";

import { useEffect, useState } from "react";
import List from "@/app/components/List";
import { ItemType } from "@/app/components/ListItem";
import { useLocale } from "next-intl";
import { getVacancies } from "../api";

export type VacancyType = ItemType & {};

// const mockVacancies: VacancyType[] = [
//   {
//     title: "технік-лаборант",
//     body: "На роботу потрібен технік-лаборант  з досвідом роботи для проведення лабораторних досліджень с/г продукції. Заробітна плата висока. Звертатися за номером телефону: 099 179 73 06 в робочі дні з 08:00 до 17:00.",
//   },
// ];

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
    <div id="vacanciesPage">
      <List items={vacancies} />
    </div>
  );
};

export default VacanciesPage;
