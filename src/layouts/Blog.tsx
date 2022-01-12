import { Blog } from '.contentlayer/types';
import { Comments } from '@components/Comments';
import { AnchorPoint, PostAnchorpoints } from '@components/PostAnchorpoints';
import { PostInfo } from '@components/PostInfo';
import { PostTagList } from '@components/PostTagList';
import { useEffect, useRef, useState } from 'react';

export const BlogLayout: React.FC<{ post?: Blog }> = ({ post, children }) => {
  const [points, setPoints] = useState<AnchorPoint[]>([]);
  const content = useRef<null | HTMLDivElement>(null);

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

  useEffect(() => {
    getBriefContent();
  }, []);

  if (typeof post === 'undefined') {
    return (
      <article>
        <h1>Post not found.</h1>
      </article>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-start w-full px-4 my-4">
        <article className="desktop:w-[700px] laptop:w-[500px] w-full">
          <div className="top-32 desktop:right-20 laptop:right-5 laptop:block w-80 fixed hidden p-8 rounded-lg">
            <PostAnchorpoints points={points} title={post.title} />
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <h1 className="laptop:text-6xl tablet:text-4xl inline mb-8 text-3xl font-bold">
              {post.title}
            </h1>
            <PostTagList post={post} />
            <PostInfo post={post} />
            <h3 className="tablet:mt-8 mt-4 font-light">{post.summary}</h3>
          </div>
          <section
            id="content-section"
            className="dark:prose-invert w-full prose"
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
    );
  }
};
