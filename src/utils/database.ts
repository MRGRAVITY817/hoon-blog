import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl + '', supabaseKey + '');

// Comment Request
export const readAllCommentsFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);

export const addCommentRequest = (url: string, comment: any) =>
  axios.post(url, { comment }).then((res) => res.data);
