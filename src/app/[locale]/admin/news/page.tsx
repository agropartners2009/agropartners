"use client";

import CreateForm from "@/app/components/CreateForm";
import List from "@/app/components/List";
import { ItemType } from "@/app/components/ListItem";
import { useEffect, useState } from "react";
import { createNews, deleteNews, getNews } from "../../api";
import { useLocale } from "next-intl";

export type VacancyType = ItemType & {};

const NewsPage: React.FC = () => {
  const locale = useLocale();
  const [news, setNews] = useState<VacancyType[]>([]);

  useEffect(() => {
    const getData = async () => {
      return await getNews(locale);
    };
    getData().then((res) => setNews(res));
  }, [locale]);

  const createFun = async (data: any) => {
    await createNews(data);
    const newNews = await getNews(locale);
    setNews(newNews);
  };

  const deleteFun = async (id: string) => {
    await deleteNews(id);
    const newNews = await getNews(locale);
    setNews(newNews);
  };

  return (
    <div id="newsPage">
      <CreateForm submitFun={createFun} />
      <List items={news} isAdmin deleteFun={deleteFun} />
    </div>
  );
};

export default NewsPage;
