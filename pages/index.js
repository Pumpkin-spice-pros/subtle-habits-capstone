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

	if (!user){
		return (
			<Auth
				redirectTo="https://mysubtlehabits.vercel.app/"
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
