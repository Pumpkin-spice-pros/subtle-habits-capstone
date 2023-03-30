// import { headers, cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";




export async function handler(req, res) {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
	);
	const { data, error } = await supabase.auth.getUser();
	console.log("data: ", data);
}
