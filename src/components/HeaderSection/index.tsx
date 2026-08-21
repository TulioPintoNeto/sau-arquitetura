import CN from "classnames";
import { Title } from "../Title";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  text: string;
  center?: boolean;
  main?: boolean;
  titleItemProp?: string;
};

export function HeaderSection({
  title,
  text,
  center = false,
  main = false,
  titleItemProp,
}: Props) {
  const tag = main ? "h1" : "h2";

  return (
    <div
      className={CN(styles.headerSection, {
        [styles.main]: main,
        [styles.center]: center,
      })}
    >
      <p className={styles.complementaryText}>{text}</p>
      <Title tag={tag} itemProp={titleItemProp}>
        {title}
      </Title>
    </div>
  );
}
