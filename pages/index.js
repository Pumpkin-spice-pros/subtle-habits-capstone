import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const LoginPage = () => {
	const supabaseClient = useSupabaseClient();
	const user = useUser();
	const [data, setData] = useState();
  const router = useRouter();

	useEffect(() => {
		async function loadData() {
			const { data } = await supabaseClient.from("Users").select("id").eq(user.id);
			setData(data);
		}
		// Only run query once user is logged in.
		if (user) loadData();
	}, [user]);

  const getURL = () => {
		let url =
			process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
			process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
			"http://localhost:3000/";
		// Make sure to include `https://` when not localhost.
		url = url.includes("http") ? url : `https://${url}`;
		// Make sure to including trailing `/`.
		url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
		return url;
	};

	if (!user){
		return (
			<Auth
				redirectTo={getURL}
				appearance={{ theme: ThemeSupa }}
				supabaseClient={supabaseClient}
				providers={['google']}
				socialLayout="horizontal"
			/>
		)
     } else {
      router.push("/authorized/profile");
      console.log('user: ', user);
    }
};

export default LoginPage;
