import { supabase } from '@utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

const ReadComments = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id: postId } = req.query;
  switch (req.method) {
    case 'GET':
      const { data: getData, error: getError } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', +postId);
      if (getError) {
        return res.status(500).json({ message: getError.message });
      }
      return res.status(200).json(getData);
    case 'POST':
      const { comment } = req.body;
      const { data: postData, error: postError } = await supabase
        .from('comments')
        .insert(comment);
      if (postError) {
        return res.status(500).json({ message: postError.message });
      }
      return res.status(200).json(postData);
    case 'PATCH':
      const { commentId, payload } = req.body;
      const { data: patchData, error: patchError } = await supabase
        .from('comments')
        .update({ payload })
        .eq('id', commentId);
      if (patchError) {
        return res.status(500).json({ message: patchError.message });
      }
      return res.status(200).json(patchData);
    default:
      return res.status(405).json({
        message: 'Method Not Allowed'
      });
  }
};

export default ReadComments;
