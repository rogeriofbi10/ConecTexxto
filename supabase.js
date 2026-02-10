// supabase.js (substitua TODO o conteúdo)
console.log("supabase.js está sendo carregado...");

const SUPABASE_URL = "https://peoinxkkmeemlmgpugbv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Wp8oZnHe8C9EdwJdV3satw_NF6KXdk4";

let supabaseClient;

try {
  const { createClient } = supabase;  // supabase global do esm.sh
  supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  });
  window.supabase = supabaseClient;  // Torna acessível globalmente
  console.log("Supabase inicializado OK!");
} catch (err) {
  console.error("Erro crítico no supabase.js:", err);
}
