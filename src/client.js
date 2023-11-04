import { createClient } from "@supabase/supabase-js";

const URL = 'https://qtdgsmzmgbmnsypcsyxy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0ZGdzbXptZ2JtbnN5cGNzeXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNjQ4MjQsImV4cCI6MjAxNDY0MDgyNH0.YYSYN2m9ITwI3x5CDoKShpfU9GLO0wat9ajNWYBzAE0';

export const supabase = createClient(URL, API_KEY);