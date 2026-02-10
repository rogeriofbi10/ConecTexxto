// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://peoinxkkmeemlmgpugbv.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_Wp8oZnHe8C9EdwJdV3satw_NF6KXdk4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
