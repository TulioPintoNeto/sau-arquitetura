import { ReactNode, useCallback } from "react";
import styles from "./styles.module.scss";

interface Props {
    children: ReactNode;
    className?: string;
    verticalPadding?: boolean;
}

const Container = ({ children, className, verticalPadding = false }: Props) => {
    const getClasses = useCallback(() => {
        const classes: (String | undefined)[] = [styles.container, className];

        if (verticalPadding) {
            classes.push(styles.verticalPadding);
        }

        return classes.join(" ");
    }, [className, verticalPadding]);

    return <div className={getClasses()}>{children}</div>;
};

export default Container;
