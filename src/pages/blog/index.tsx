import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import { GetStaticProps, NextPage } from 'next';
import { PostPreview } from 'src/components/PostPreview';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getNumericDate } from '@utils/time';
import { getBlogTags } from '@utils/blog';

interface BlogIndexProps {
  posts: Blog[];
}

const BlogIndex: NextPage<BlogIndexProps> = ({ posts }) => {
  const tags = getBlogTags(posts);
  const [searching, setSearching] = useState(false);
  const [tagList, setTagList] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>();

  useEffect(() => {
    tagList.length === 0 ? setSearching(false) : setSearching(true);
  }, [tagList]);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) => {
        const tags = post.tags.split(',');
        for (let t of tags) {
          if (tagList.includes(t)) {
            return true;
          }
        }
        return false;
      })
    );
  }, [tagList, posts]);

  return (
    <div>
      <Head>
        <title>Hoon Blog</title>
      </Head>
      <h1 className="mb-12">Blog posts</h1>
      <div className="flex flex-wrap gap-2 mb-12">
        {tags
          .filter((tag) => tag !== 'Pinned')
          .map((tag) => (
            <button
              key={tag}
              onClick={() => {
                tagList.includes(tag)
                  ? setTagList(tagList.filter((t) => t !== tag))
                  : setTagList([tag, ...tagList]);
              }}
              className={`px-3 py-1 text-sm border-dark dark:border-bright transition-colors border rounded-full ${
                tagList.includes(tag)
                  ? `text-bright bg-dark dark:text-dark dark:bg-bright`
                  : `text-dark dark:text-bright`
              }`}
            >
              {tag}
            </button>
          ))}
      </div>
      {searching ? (
        <article className="grid grid-flow-row gap-4">
          {typeof filteredPosts !== 'undefined' &&
            filteredPosts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
        </article>
      ) : (
        <article className="grid grid-flow-row gap-12">
          <section className="grid">
            <h2 className="mb-4">Pinned</h2>
            <PostPreview
              post={posts.find((post) => post.tags.includes('Pinned'))!}
            />
          </section>
          <section>
            <h2 className="mb-4">Recent</h2>
            <div className="grid grid-flow-row gap-4">
              {posts
                .sort((a, b) => {
                  const aDate = new Date(a.publishedAt);
                  const bDate = new Date(b.publishedAt);
                  return getNumericDate(bDate) - getNumericDate(aDate);
                })
                .map((post) => (
                  <PostPreview key={post.slug} post={post} />
                ))}
            </div>
          </section>
        </article>
      )}
    </div>
  );
};

export default BlogIndex;

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  return {
    props: { posts: allBlogs }
  };
};
