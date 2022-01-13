import Link from 'next/link';
import { supabase } from '@utils/database';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PencilIcon, ReplyIcon, TrashIcon } from '@heroicons/react/outline';

interface CommentStateParams {
  id: number;
  user: string;
  payload: string;
  replyOf: number | null;
}

interface CommentsProps {
  postId: number;
}

export const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<CommentStateParams[]>([]);
  useEffect(() => {
    const getComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId);

      if (!error) {
        const commentList = (data as any[]).map((comment) => {
          return {
            id: comment.id,
            user: comment.writer_email,
            payload: comment.payload,
            replyOf: comment.reply_of
          };
        });

        setComments(commentList as CommentStateParams[]);
      }
    };
    getComments();
  }, [postId]);

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

  const deleteComment = async (id: number) => {
    const ok = window.confirm('Delete comment?');
    if (ok) {
      const { error } = await supabase.from('comments').delete().eq('id', id);
      if (error) {
        window.alert(`Delete Error: ${error}`);
        return;
      }
      window.alert('Comment deleted');
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
      const { error } = await supabase
        .from('comments')
        .update({ payload })
        .eq('id', id);
      if (error) {
        window.alert(`Edit comment Error: ${error}`);
        return;
      }
      setEdit(null);
      setEditPayload(null);
      window.alert('Comment edited');
    }
  };

  const onValid = async () => {
    const { payload } = getValues();
    if (
      typeof session?.user?.email === 'string' &&
      session.user.email.length > 0
    ) {
      const { error } = await supabase.from('comments').insert([
        {
          writer_email: session.user.email,
          payload,
          reply_of: replyContent?.commentId,
          post_id: postId
        }
      ]);

      if (error) {
        window.alert(`Insert Error: ${error}`);
        return;
      }

      setValue('payload', '');
      setReplyContent(null);
      window.alert('Comment added');
    }
  };

  const { data: session, status } = useSession();

  return (
    <section id="comments-section" className="w-full">
      <h1 className="tablet:mb-8 mb-4">Comments</h1>
      {status === 'authenticated' ? (
        <form
          onSubmit={handleSubmit(onValid)}
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
      <div className="mt-8">
        {comments.map(({ user, payload, id: commentId, replyOf }) => (
          <div
            key={`comment-${commentId}`}
            id={`comment-${commentId}`}
            className={`scroll-m-4 flex flex-col items-start gap-1 py-1`}
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
                    ?.payload.slice(0, 30)}
                </p>
              </div>
            )}
            <p className="font-medium">{user}</p>
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
        ))}
      </div>
    </section>
  );
};
