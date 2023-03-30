import { useSession } from "@supabase/auth-helpers-react";
const session = useSession();
const { supabaseAccessToken } = session;

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	{
		global: {
			headers: {
				Authorization: `Bearer ${supabaseAccessToken}`
			}
		}
	}
);
