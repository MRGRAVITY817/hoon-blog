import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl + '', supabaseKey + '');

export const readAllCommentsFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);
