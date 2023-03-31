import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { supabaseServer } from "../client";


const LoginPage = () => {
	const supabaseClient = useSupabaseClient();
	const user = useUser();
	const [data, setData] = useState();
  const router = useRouter();
  const session = useSession();

  const setUserInformation = async () => {
    const user = useUser();
		const { user_metadata } = user;
		const { full_name, email, email_verified } = user_metadata;
		const first_name = full_name.split(" ")[0];
		const last_name = full_name.split(" ")[1];
    const { data, error } = await supabaseClient
    .from('accounts')
    .insert([
      { 'firstName': first_name },
     { 'lastName': last_name },
     { 'email': email }
    ]);
    if(!error) {
      let info = {
        firstName: first_name,
        lastName: last_name,
        email: email
      }
      return info;
    }
  }

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
      // let info = setUserInformation();
       router.push("/authorized/profile");
      //  console.log('user: ', user);
      //  console.log('session: ', session)
      }
};
    
// export const getServerSideProps = () => {
  // logic function to get users info from their google account and paste it in their profile via insert into the accounts table (pre-rendering it before they get to the page) goes here
  // const user = useUser();
  // const { user_metadata } = user;
  // const { full_name, email, email_verified} = user_metadata;
  // const first_name = full_name.split(' ')[0];
  // const last_name = full_name.split(' ')[1];
// }

export default LoginPage;
