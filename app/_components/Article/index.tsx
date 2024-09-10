import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";
import { headers } from "next/headers";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category}></Category>
        <Date date={data.publishedAt ?? data.createdAt}></Date>
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail?.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      )}
      <div
        className={styles.contents}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
