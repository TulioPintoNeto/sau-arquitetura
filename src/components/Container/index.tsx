import cn from "classnames";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
  verticalPadding?: boolean | "extra";
}

const Container = ({ children, className, verticalPadding = false }: Props) => (
  <div
    className={cn([
      styles.container,
      className,
      {
        [styles.extraPadding]: verticalPadding === "extra",
        [styles.verticalPadding]: verticalPadding === true,
      },
    ])}
  >
    {children}
  </div>
);

export default Container;
