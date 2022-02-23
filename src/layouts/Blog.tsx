import { Blog } from '.contentlayer/types';
import { Comments } from '@components/Comments';
import { AnchorPoint, PostAnchorpoints } from '@components/PostAnchorpoints';
import { PostInfo } from '@components/PostInfo';
import { PostTagList } from '@components/PostTagList';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import { RootLayout } from './Root';

export const BlogLayout: React.FC<{ post?: Blog }> = ({ post, children }) => {
  const [points, setPoints] = useState<AnchorPoint[]>([]);
  const content = useRef<null | HTMLDivElement>(null);

  const meta = {
    title: post?.title ?? 'Blog - Hoon Wee',
    description: post?.summary ?? 'I write articles about Techs and UX',
    image: post?.image ?? `https://hoonwee.com/static/images/banner/blog.png`,
    type: 'article'
  };

  const getBriefContent = () => {
    let pList: AnchorPoint[] = [];
    content.current?.querySelectorAll('h1, h2, h3').forEach((child, idx) => {
      child.setAttribute('id', `title-${idx}`);
      pList.push({
        title: child.textContent + '',
        level: child.nodeName + '',
        titleId: idx
      });
    });
    setPoints(pList);
  };

  const router = useRouter();

  useEffect(() => {
    getBriefContent();
  }, [router.asPath]);

  if (typeof post === 'undefined') {
    return (
      <article>
        <h1>Post not found.</h1>
      </article>
    );
  } else {
    return (
      <RootLayout
        title={meta.title}
        description={meta.description}
        image={meta.image}
        type={meta.type}
      >
        <div className="tablet:px-4 flex flex-col items-center justify-start w-full px-2 my-4">
          <article className="desktop:w-[700px] laptop:w-[500px] w-full">
            <div className="top-32 desktop:right-20 laptop:right-5 laptop:block w-80 fixed hidden p-8 rounded-lg">
              <PostAnchorpoints points={points} title={post.title} />
            </div>
            <div className="flex flex-col items-start justify-center w-full">
              <h1 className="inline mb-8 font-bold">{post.title}</h1>
              <PostTagList post={post} />
              <PostInfo post={post} />
              <h3 className="tablet:mt-8 mt-4 font-light">{post.summary}</h3>
            </div>
            <section
              id="content-section"
              className="dark:prose-invert w-full py-6 prose"
              ref={content}
            >
              {children}
            </section>
            <div className="tablet:my-12 tablet:gap-12 flex items-center justify-center gap-8 my-8">
              <p className="">•</p>
              <p className="">•</p>
              <p className="">•</p>
            </div>
            <Comments postId={post.postId} />
          </article>
        </div>
      </RootLayout>
    );
  }
};
