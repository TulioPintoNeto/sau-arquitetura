import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  itemProp?: string;
  tag?: 'h1' | 'h2'
};

export const Title = ({ children, itemProp, tag: Tag = 'h1' }: Props) => {
  return (
    <Tag className={styles.title} itemProp={itemProp}>
      {children}
    </Tag>
  );
};
