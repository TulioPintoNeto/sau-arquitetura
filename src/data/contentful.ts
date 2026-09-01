import * as contentful from "contentful";
import { slugify } from "./slug";
import { BlogPostQuery, BlogPostSkeleton } from "./types";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const limit = 10;

class Content {
  async getBlogPages() {
    const result = await this.posts({ limit: 1 });
    return Math.ceil(result.total / limit);
  }

  async getPosts({ page }: { page: number }) {
    const skip = (page - 1) * limit;
    const result = await this.posts({ limit, skip });
    return {
      numberOfPages: Math.ceil(result.total / limit),
      posts: result.items.map(({ fields }) => ({
        title: fields.title,
        body: fields.body,
        slug: slugify(fields.title),
      })),
    };
  }

  async getAllPostSlugs() {
    const result = await this.posts({ limit: 1000 });
    return result.items.map(({ fields }) => slugify(fields.title));
  }

  async getPostBySlug(slug: string) {
    const result = await this.posts({ limit: 1000 });
    const match = result.items.find(
      ({ fields }) => slugify(fields.title) === slug,
    );
    if (!match) return null;
    return { title: match.fields.title, body: match.fields.body, slug };
  }

  private posts(query: BlogPostQuery) {
    return client.getEntries<BlogPostSkeleton>({
      content_type: "posts",
      order: ["-sys.createdAt"],
      ...query,
    });
  }
}

export const content = new Content();
export type Posts = Awaited<ReturnType<typeof content.getPosts>>["posts"];
export type Post = NonNullable<Awaited<ReturnType<typeof content.getPostBySlug>>>;
