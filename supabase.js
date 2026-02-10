// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://peoinxkkmeemlmgpugbv.supabase.co";

// ATENÇÃO: Use SOMENTE a ANON KEY pública aqui (não service_role!)
export const SUPABASE_ANON_KEY = "sb_publishable_Wp8oZnHe8C9EdwJdV3satw_NF6KXdk4";  // ← Troque se for inválida

let supabaseClient;

try {
  supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      autoRefreshToken: true,          // Recarrega token automaticamente
      persistSession: true,             // Salva no localStorage (padrão true)
      storageKey: "conectexxto-auth",   // Nome customizado para evitar conflitos
      detectSessionInUrl: true
    }
  });

  // Teste inicial (opcional - remove depois)
  supabaseClient.auth.getSession().then(({ data, error }) => {
    if (error) {
      console.error("Erro ao verificar sessão Supabase:", error);
    } else if (data.session) {
      console.log("Sessão ativa:", data.session.user.email);
    } else {
      console.log("Nenhuma sessão ativa.");
    }
  });
} catch (err) {
  console.error("Falha ao inicializar Supabase:", err);
}

export const supabase = supabaseClient;
