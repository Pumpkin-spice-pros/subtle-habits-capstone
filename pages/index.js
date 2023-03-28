import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import HomePage from "../components/HomePage";
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
				redirectTo="http://localhost:3000/"
				appearance={{ theme: ThemeSupa }}
				supabaseClient={supabaseClient}
				providers={[]}
				socialLayout="horizontal"
			/>
		)
     } else {
      router.push('/authorized/profile')
    }
    
	// return <HomePage data={data} />
};

export default LoginPage;
