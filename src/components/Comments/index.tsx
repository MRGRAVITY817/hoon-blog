import Link from 'next/link';
import {
  addCommentRequest,
  deleteCommentRequest,
  editCommentRequest,
  readAllCommentsFetcher
} from '@utils/database';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PencilIcon, ReplyIcon, TrashIcon } from '@heroicons/react/outline';
import useSWR, { Key, useSWRConfig } from 'swr';

interface Comments {
  id: number;
  writer_email: string;
  payload: string;
  reply_of: number | null;
  created_at: string;
}

interface CommentsProps {
  postId: number;
}

export const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const commentsUrl: Key = `/api/comments/${postId}`;
  // TODO: Handle error from getting comments
  const { data: comments, error: commentError } = useSWR<Comments[]>(
    commentsUrl,
    readAllCommentsFetcher
  );

  const [replyContent, setReplyContent] = useState<{
    comment: string;
    commentId: number;
  } | null>(null);
  const reply = (comment: string, commentId: number) => {
    setReplyContent({ comment, commentId });
    document.getElementById('comment-form')?.scrollIntoView();
  };

  const { handleSubmit, getValues, register, watch, setValue } = useForm<{
    payload: string;
  }>({
    defaultValues: {
      payload: ''
    }
  });

  const { mutate } = useSWRConfig();
  const addComment = async () => {
    const { payload } = getValues();
    if (
      typeof session?.user?.email === 'string' &&
      session.user.email.length > 0
    ) {
      const newComment = {
        writer_email: session.user.email,
        payload,
        reply_of: replyContent?.commentId,
        post_id: postId
      };
      if (typeof comments !== 'undefined') {
        // Modify cache before actually adding comment
        mutate(commentsUrl, [...comments, newComment], false);
        // Send request for adding a comment
        await addCommentRequest(commentsUrl, newComment);
        // Trigger revalidation to make sure local data is correct
        mutate(commentsUrl);
        // Reset form
        setValue('payload', '');
        setReplyContent(null);
        window.alert('Comment added');
      }
    }
  };

  const [edit, setEdit] = useState<number | null>(null);
  const [editPayload, setEditPayload] = useState<string | null>(null);
  const switchEdit = (id: number, payload: string) => {
    if (edit !== null) {
      setEdit(null);
    } else {
      setEdit(id);
      setEditPayload(payload);
    }
  };
  const editComment = async (id: number, payload: string) => {
    const ok = window.confirm('Edit comment?');
    if (ok) {
      try {
        // Modify cache before actually adding comment
        mutate(
          commentsUrl,
          comments?.map((comment) => {
            if (comment.id === id) {
              return { ...comment, payload };
            }
            return comment;
          }),
          false
        );
        // Send request for adding a comment
        await editCommentRequest(commentsUrl, id, payload);
        // Trigger revalidation to make sure local data is correct
        mutate(commentsUrl);
        // Reset form
        setEdit(null);
        setEditPayload(null);
        window.alert('Comment edited');
      } catch (error) {
        window.alert(`Edit comment Error: ${error}`);
        return;
      }
    }
  };

  const deleteComment = async (id: number) => {
    const ok = window.confirm('Delete comment?');
    if (ok) {
      try {
        mutate(
          commentsUrl,
          comments?.filter((comment) => comment.id !== id),
          false
        );
        const { data, error } = await deleteCommentRequest(commentsUrl, id);
        if (error) {
          console.log(error);
          return;
        }
        mutate(commentsUrl);
        window.alert('Comment deleted');
      } catch (error) {
        window.alert(`Delete Error: ${error}`);
        return;
      }
    }
  };

  const { data: session, status } = useSession();

  return (
    <section id="comments-section" className="scroll-m-8 w-full">
      <h1 className="tablet:mb-8 mb-4">Comments</h1>
      {status === 'authenticated' ? (
        <form
          onSubmit={handleSubmit(addComment)}
          className="scroll-m-4"
          id="comment-form"
        >
          {replyContent && (
            <div className="opacity-70 flex items-center justify-start gap-4 mb-4">
              <ReplyIcon className="w-4 -rotate-180" />
              <p className="font-extralight text-base">
                {replyContent.comment}
              </p>
              <TrashIcon
                onClick={() => setReplyContent(null)}
                className="w-4 cursor-pointer"
              />
            </div>
          )}
          <div className="flex flex-col items-end w-full">
            <input
              type="text"
              className="border-dark dark:border-bright opacity-70 focus:opacity-100 w-full px-1 pb-2 text-lg font-light transition-all ease-out bg-transparent border-b-2 outline-none"
              placeholder="Write comments"
              {...register('payload')}
            />
            <button
              className={`tablet:mt-6 mt-4 text-lg transition-all rounded-md ${
                watch().payload.length > 0
                  ? `opacity-100 pointer-events-auto`
                  : `opacity-70 pointer-events-none`
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-8">
          <p>Sign in to add comments</p>
          <Link href={'/auth/signin'}>
            <a className="bg-main dark:bg-bright text-bright dark:text-main px-3 py-1 text-lg rounded-lg">
              Sign in
            </a>
          </Link>
        </div>
      )}
      <div className="mt-2">
        {typeof comments !== 'undefined' &&
          comments
            .sort((a, b) => {
              const aDate = new Date(a.created_at);
              const bDate = new Date(b.created_at);
              // @ts-ignore
              return aDate - bDate;
            })
            .map(
              ({
                writer_email: user,
                payload,
                id: commentId,
                reply_of: replyOf
              }) => (
                <div
                  key={`comment-${commentId}`}
                  id={`comment-${commentId}`}
                  className={`scroll-m-4 flex flex-col items-start gap-1 py-4`}
                >
                  {replyOf && (
                    <div
                      onClick={() =>
                        document
                          .getElementById(`comment-${replyOf}`)
                          ?.scrollIntoView()
                      }
                      className="opacity-70 flex items-center justify-start gap-4 cursor-pointer"
                    >
                      <ReplyIcon className="w-4 -rotate-180" />
                      <p className="font-extralight text-base">
                        {comments
                          .find((comment) => comment.id === replyOf)
                          ?.payload.slice(0, 30) ||
                          '[Comment you replied has been deleted]'}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between w-full">
                    <p className="font-medium">{user}</p>
                    <div className="flex justify-end w-full gap-6 mt-2">
                      <ReplyIcon
                        onClick={() => reply(payload, commentId)}
                        className="w-6 -rotate-180 cursor-pointer"
                      />
                      {session?.user?.email === user && (
                        <>
                          <PencilIcon
                            onClick={() => switchEdit(commentId, payload)}
                            className="w-6 cursor-pointer"
                          />
                          <TrashIcon
                            onClick={() => deleteComment(commentId)}
                            className="w-6 cursor-pointer"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  {edit === commentId ? (
                    <div className="flex justify-end w-full gap-4 my-1">
                      <input
                        type="text"
                        value={editPayload + ''}
                        onChange={(e) => setEditPayload(e.target.value)}
                        className="w-full pb-1 bg-transparent border-b outline-none"
                      />
                      <button
                        onClick={() => editComment(edit, editPayload + '')}
                        className={`${
                          editPayload
                            ? `pointer-events-auto opacity-100`
                            : `pointer-events-none opacity-70`
                        }`}
                      >
                        Edit
                      </button>
                    </div>
                  ) : (
                    <p className="font-extralight">{payload}</p>
                  )}
                </div>
              )
            )}
      </div>
    </section>
  );
};
