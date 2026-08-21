import { BLOCKS, Document, Text } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { BlogTypography } from "src/containers/BlogTypography";
import { Footer } from "src/containers/Footer";
import { Post } from "src/containers/Post";
import { content } from "src/data/contentful";

type Props = {
  title: string;
  description: string;
  body: Document;
};

const descriptionMaxLength = 160;

function buildDescription(doc: Document) {
  const firstParagraph = doc.content.find(
    (node) => node.nodeType === BLOCKS.PARAGRAPH,
  );

  if (!firstParagraph) return "";

  const plainText = firstParagraph.content
    .filter((node): node is Text => node.nodeType === "text")
    .map((node) => node.value)
    .join("");

  return plainText.length > descriptionMaxLength
    ? plainText.substring(0, descriptionMaxLength) + "..."
    : plainText;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await content.getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (typeof params?.slug !== "string") {
    return { notFound: true };
  }
  const post = await content.getPostBySlug(params.slug);
  if (!post) {
    return { notFound: true };
  }
  return {
    props: {
      title: post.title,
      description: buildDescription(post.body),
      body: post.body,
    },
    revalidate: 60,
  };
};

export default function BlogPost({ body, description, title }: Props) {
  return (
    <>
      <Head>
        <title>{`${title} - SAU Arquitetura e Construção`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlogTypography>
        <main>
          <article>
            <Post title={title} body={body} />
          </article>
          <Footer />
        </main>
      </BlogTypography>
    </>
  );
}
