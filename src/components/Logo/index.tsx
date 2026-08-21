import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  itemPropLogo?: boolean;
}

export function Logo({ itemPropLogo = false }: Props) {
  return (
    <div className={styles.imageBox}>
      <Image
        alt="Logo da SAU - Somos Arquitetura e Urbanismo"
        fill
        itemProp={itemPropLogo ? "logo" : undefined}
        sizes="(max-width: 767px) 150px, 203px"
        src="/sau-logo.png"
      />
    </div>
  );
}
