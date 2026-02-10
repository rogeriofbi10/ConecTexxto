// supabase.js
const { createClient } = supabase;  // Usa o global supabase do esm.sh

const SUPABASE_URL = "https://peoinxkkmeemlmgpugbv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Wp8oZnHe8C9EdwJdV3satw_NF6KXdk4";  // Verifique se é a anon key correta!

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

window.supabase = supabaseClient;  // Torna global para acesso direto no HTML
