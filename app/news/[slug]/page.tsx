import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export const revalidate = 0;

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  return (
    <>
      <Article data={data}></Article>
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}

//----------------------------------------------------------------------
// import { notFound } from "next/navigation";
// import { getNewsDetail } from "@/app/_libs/microcms";
// import Article from "@/app/_components/Article";
// import ButtonLink from "@/app/_components/ButtonLink";
// import styles from "./page.module.css";

// type Props = {
//   params: {
//     slug: string;
//   };
// };
// export default async function Page({ params }: Props) {
//   const data = await getNewsDetail(params.slug).catch(notFound);
//   //return <div>{JSON.stringify(params.slug)}</div>;
//   return (
//     <>
//       {/* <Article data={data} /> */}
//       <div className={styles.footer}>
//         <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
//       </div>
//     </>
//   );
// }
