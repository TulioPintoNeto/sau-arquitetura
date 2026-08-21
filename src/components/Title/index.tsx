import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
  itemProp?: string;
  tag?: "h1" | "h2";
  className?: string;
};

export const Title = ({
  children,
  itemProp,
  tag: Tag = "h1",
  className,
}: Props) => {
  return (
    <Tag
      className={[styles.title, className].filter(Boolean).join(" ")}
      itemProp={itemProp}
    >
      {children}
    </Tag>
  );
};
