// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabase = createClient(
  "https://peoinxkkmeemlmgpugbv.supabase.co",
  "sb_publishable_Wp8oZnHe8C9EdwJdV3satw_NF6KXdk4",
  {
    auth: {
      storageKey: "conectexxto-auth-token",  // nome customizado
      persistSession: true,
      autoRefreshToken: true
    }
  }
);
