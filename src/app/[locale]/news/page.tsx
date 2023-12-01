"use client";

import { useEffect, useState } from "react";
import List from "@/app/components/List";
import { ItemType } from "@/app/components/ListItem";
import { getNews } from "../api";
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

  return (
    <div id="newsPage">
      <List items={news} />
    </div>
  );
};

export default NewsPage;
