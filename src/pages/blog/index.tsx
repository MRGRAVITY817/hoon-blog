import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';
import { GetStaticProps, NextPage } from 'next';
import { PostPreview } from 'src/components/PostPreview';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getBlogTags } from '@utils/blog';
import { SeriesSection } from '@components/SeriesSection';

interface BlogIndexProps {
  posts: Blog[];
}

const BlogIndex: NextPage<BlogIndexProps> = ({ posts }) => {
  const tags = getBlogTags(posts);
  const [searching, setSearching] = useState(false);
  const [tagList, setTagList] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>([]);
  const [showMoreRecent, setShowMoreRecent] = useState<boolean>(false);

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
        <title>Blog - Hoon Wee</title>
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
          <h2 className="mb-4">Filtered Posts</h2>
          {typeof filteredPosts !== 'undefined' &&
            filteredPosts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
        </article>
      ) : (
        <article className="grid grid-flow-row">
          <section id="pinned" className="mb-4">
            <h2 className="mb-4">Pinned</h2>
            <PostPreview
              post={posts.find((post) => post.tags.includes('Pinned'))!}
            />
          </section>
          <section id="recent" className="mb-20">
            <h2 className="mb-4">Recent</h2>
            <div className="grid grid-flow-row gap-6">
              {posts
                .sort((a, b) => {
                  const aDate = new Date(a.publishedAt);
                  const bDate = new Date(b.publishedAt);
                  return +bDate - +aDate;
                })
                .map((post) => <PostPreview key={post.slug} post={post} />)
                .slice(0, showMoreRecent ? 1000 : 2)}
            </div>
            <button
              onClick={() => setShowMoreRecent(!showMoreRecent)}
              className="hover:text-orange-500 mt-4 text-2xl underline transition-colors"
            >
              {showMoreRecent ? 'Hide' : 'Show more ...'}
            </button>
          </section>
          <section id="series">
            <h2 className="mb-4">Series</h2>
            <SeriesSection posts={posts} />
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
