import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const supabaseServer = createServerSupabaseClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
