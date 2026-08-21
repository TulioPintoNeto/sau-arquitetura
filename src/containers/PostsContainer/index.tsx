import { BLOCKS, Document, Text } from "@contentful/rich-text-types";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Container from "src/components/Container";
import { Title } from "src/components/Title";
import { Posts } from "src/data/contentful";
import styles from "./styles.module.scss";

type Props = {
  numberOfPages: number;
  page: number;
  posts: Posts;
};

const maxLength = 150;

function renderExcerpt(doc: Document) {
  const firstParagraph = doc.content.find(
    (node) => node.nodeType === BLOCKS.PARAGRAPH,
  );

  if (!firstParagraph) return "";

  const plainText = firstParagraph.content
    .filter((node): node is Text => node.nodeType === "text")
    .map((node) => node.value)
    .join("");

  return plainText.length > maxLength
    ? plainText.substring(0, maxLength) + "..."
    : plainText;
}

export const PostsContainer = ({ numberOfPages, page, posts }: Props) => {
  return (
    <section>
      <Container verticalPadding="extra">
        <Title>Posts</Title>
        <ul className={styles.grid}>
          {posts.map(({ body, slug, title }) => (
            <li key={slug}>
              <Link href={`/blog/post/${slug}`} className={styles.postLink}>
                <h3>{title}</h3>
                <p>{renderExcerpt(body)}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Stack spacing={2} sx={{ alignItems: "center", mt: 4 }}>
          <Pagination
            count={numberOfPages}
            color="primary"
            page={page}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                href={`/blog/${item.page}`}
                {...item}
              />
            )}
          />
        </Stack>
      </Container>
    </section>
  );
};
