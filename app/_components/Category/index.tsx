import type { Category } from "@/app/_libs/microcms";
import Styles from "./index.module.css";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return <span className={Styles.tag}>{category.name}</span>;
}
