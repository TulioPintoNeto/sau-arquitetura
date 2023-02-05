import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: Props) => {
    return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
