// supabase.js - versão global para funcionar no HTML inline
const SUPABASE_URL = "https://peoinxkkmeemlmgpugbv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Wp8oZnHe8C9EdwJdV3satw_NF6KXdk4";  // confirme se é a anon key correta no dashboard Supabase

let supabase;

try {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storageKey: "conectexxto-auth"  // nome customizado para evitar conflitos
    }
  });
  window.supabase = supabase;  // Torna global para acessar diretamente no HTML
  console.log("Supabase inicializado com sucesso");
} catch (err) {
  console.error("Erro ao inicializar Supabase:", err);
}

// Carrega o createClient do esm.sh (sem import, pois browser não suporta sem type=module)
const script = document.createElement('script');
script.src = "https://esm.sh/@supabase/supabase-js@2";
script.onload = () => {
  const { createClient } = supabase;  // supabase global do esm.sh
};
document.head.appendChild(script);
