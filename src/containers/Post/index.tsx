import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Container from "src/components/Container";
import { ShareButtons } from "src/components/ShareButtons";
import { Title } from "src/components/Title";
import { nextOptions } from "./nextOptions";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  body: Document;
  url: string;
};

export const Post = ({ body, title, url }: Props) => {
  return (
    <Container className={styles.postMaxWidth} verticalPadding="extra">
      <Title className={styles.title}>{title}</Title>
      {documentToReactComponents(body, nextOptions)}
      <ShareButtons title={title} url={url} />
    </Container>
  );
};
