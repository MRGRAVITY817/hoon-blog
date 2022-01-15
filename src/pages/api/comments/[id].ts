import { supabase } from '@utils/database';
import { NextApiRequest, NextApiResponse } from 'next';

const ReadComments = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { id: postId } = req.query;
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', +postId);
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(200).json(data);
  }
  return res.status(405).json({
    message: 'Method Not Allowed'
  });
};

export default ReadComments;
