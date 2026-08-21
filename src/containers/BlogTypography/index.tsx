import { ReactNode } from "react";
import styles from "./styles.module.scss";

export const BlogTypography = ({ children }: { children: ReactNode }) => (
  <div className={styles.typography}>{children}</div>
);
