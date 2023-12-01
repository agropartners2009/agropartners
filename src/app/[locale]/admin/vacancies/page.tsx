"use client";

import { useEffect, useState } from "react";
import List from "@/app/components/List";
import { ItemType } from "@/app/components/ListItem";
import CreateForm from "@/app/components/CreateForm";
import { createVacancy, deleteVacancy, getVacancies } from "../../api";
import { useLocale } from "next-intl";

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

  const create = async (data: any) => {
    await createVacancy(data);
    const newVacancies = await getVacancies(locale);
    setVacancies(newVacancies);
  };

  const deleteFun = async (id: string) => {
    await deleteVacancy(id);
    const newNews = await getVacancies(locale);
    setVacancies(newNews);
  };

  return (
    <div id="vacanciesPage">
      <CreateForm submitFun={create} />
      <List items={vacancies} isAdmin deleteFun={deleteFun} />
    </div>
  );
};

export default VacanciesPage;
