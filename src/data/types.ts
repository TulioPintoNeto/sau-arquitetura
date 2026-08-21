import { EntriesQueries, EntryFieldTypes, EntrySkeletonType } from "contentful";

export type BlogPostFields = {
  title: EntryFieldTypes.Text;
  body: EntryFieldTypes.RichText;
};

export type BlogPostSkeleton = EntrySkeletonType & {
  contentTypeId: "posts";
  fields: BlogPostFields;
};

export type BlogPostQuery = EntriesQueries<BlogPostSkeleton, undefined>;
