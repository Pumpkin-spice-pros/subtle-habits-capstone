import { useRouter } from "next/router";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function SignOutButton() {
	const supabaseClient = useSupabaseClient();
	const [error, setError] = useState('');
	const router = useRouter();
	async function handleLogout() {
		setError('');
		const { error } = await supabaseClient.auth.signOut();
		if(error){
			setError(error.toString());
		} else {
			router.push('/');
		}
	}

	return (
		<div>
			<button
				className="flex w-full gap-2 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-emerald-200 hover:scale-110 transition-all"
				onClick={handleLogout}>
				Sign Out
			</button>
			<div>{error && <h1 style={{ color: "red" }}>{error}</h1>}</div>
		</div>
	);
}
