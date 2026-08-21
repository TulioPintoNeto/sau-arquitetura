import { GetStaticProps } from "next";
import Head from "next/head";
import { BlogTypography } from "src/containers/BlogTypography";
import { Footer } from "src/containers/Footer";
import { PostsContainer } from "src/containers/PostsContainer";
import { content, Posts } from "src/data/contentful";

type Props = {
  numberOfPages: number;
  page: number;
  posts: Posts;
};

export const getStaticPaths = async () => {
  const pages = await content.getBlogPages();
  const paths = Array.from({ length: pages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (typeof params?.page !== "string") {
    return { notFound: true };
  }
  const page = parseInt(params.page);
  const { numberOfPages, posts } = await content.getPosts({ page });

  return {
    props: { numberOfPages, page, posts },
    revalidate: 60,
  };
};

export default function Blog({ numberOfPages, page, posts }: Props) {
  return (
    <>
      <Head>
        <title>Blog - SAU Arquitetura e Construção</title>
        <meta
          name="description"
          content="Descubra a excelência da arquitetura em Pelotas com o talento de nossos arquitetos. Transforme seus sonhos em projetos de tirar o fôlego. Explore nossas criações únicas e inovadoras."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BlogTypography>
        <main>
          <div itemScope itemType="http://schema.org/Organization">
            <PostsContainer
              page={page}
              numberOfPages={numberOfPages}
              posts={posts}
            />
            <Footer />
          </div>
        </main>
      </BlogTypography>
    </>
  );
}
