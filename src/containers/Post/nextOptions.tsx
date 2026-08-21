import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const nextOptions: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <Link href={uri} className={styles.hyperlink}>
          {children}
        </Link>
      );
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      return (
        <Image
          src={`${file.url}`}
          width={file.details.image.width}
          height={file.details.image.height}
          alt={title || "Asset"}
        />
      );
    },
  },
};
