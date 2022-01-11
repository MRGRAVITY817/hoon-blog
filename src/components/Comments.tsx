import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '@utils/database';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export const Comments: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<{ user: string; payload: string }[]>(
    []
  );
  const [showComments, setShowComments] = useState<boolean>(false);
  const getComments = async (client: SupabaseClient) => {
    const { data, error } = await client
      .from('comments')
      .select('*')
      .eq('post_id', postId);

    if (!error) {
      let commentList: { user: string; payload: string }[] = [];
      (data as any[]).forEach((d) =>
        //@ts-ignore
        commentList.push({ user: d['writer_email'], payload: d['payload'] })
      );
      setComments(commentList);
    }
  };

  const { handleSubmit, getValues, register, watch, setValue } = useForm<{
    payload: string;
    replyOf: number | null;
  }>({
    defaultValues: {
      payload: ''
    }
  });

  const onValid = async () => {
    const { payload, replyOf } = getValues();
    if (
      typeof session?.user?.email === 'string' &&
      session.user.email.length > 0
    ) {
      const { data, error } = await supabase.from('comments').insert([
        {
          writer_email: session.user.email,
          payload,
          reply_of: replyOf,
          post_id: 1
        }
      ]);
      // console.log('Data: ', data); console.log('Error: ', error);
      setValue('payload', '');
      setValue('replyOf', null);
    }
  };

  const { data: session, status } = useSession();

  return (
    <div className="tablet:my-12 w-full my-4">
      <h2 className="tablet:mb-8 mb-4">Comments</h2>
      {status === 'authenticated' ? (
        <form onSubmit={handleSubmit(onValid)} className="group flex gap-4">
          <input
            type="text"
            className="border-dark dark:border-bright border-opacity-40 focus:border-opacity-100 w-full px-1 pb-2 transition-all bg-transparent border-b-2 outline-none"
            placeholder="Write comments"
            {...register('payload')}
          />
          <button
            type="submit"
            className={`px-2 py-1 text-lg transition-all rounded-md ${
              watch().payload.length > 0 ? `opacity-100` : `opacity-50`
            }`}
          >
            Submit
          </button>
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
        <h3
          className="cursor-pointer"
          onClick={async () => {
            !showComments && (await getComments(supabase));
            setShowComments(!showComments);
          }}
        >
          {showComments ? `Hide comments` : `Show comments`}
        </h3>
        {showComments && (
          <div className="mt-4">
            {comments.map(({ user, payload }, idx) => (
              <div key={`${user}-${idx}`} className="flex gap-2">
                <p>{user}</p>
                <p>{payload}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
