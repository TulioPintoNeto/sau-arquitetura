import Image from "next/image";
import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import CN from "classnames";

interface Props {
  alt: string;
  descriptions: string[];
  name: string;
  src: string;
  reversed?: boolean;
}

export function PersonSection({
  alt,
  descriptions,
  name,
  reversed = false,
  src,
}: Props) {
  return (
    <section
      className={CN(styles.column, {
        [styles.reversed]: reversed,
      })}
      itemProp="founder"
      itemScope
      itemType="http://schema.org/Person"
    >
      <div className={styles.imageBox}>
        <Image alt={alt} itemProp="image" src={src} fill />
      </div>
      <div className={styles.textBox}>
        <p itemProp="name">{name}</p>
        <p className={styles.description} itemProp="description">
          {descriptions.map((description, index) => {
            const isFirst = index === 0;

            if (isFirst) {
              return description;
            }

            return (
              <Fragment key={description}>
                <br />
                {description}
              </Fragment>
            );
          })}
        </p>
      </div>
    </section>
  );
}
