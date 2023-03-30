import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import { useRouter } from "next/router";
// import { supabase } from "../client";


const LoginPage = () => {
	const supabaseClient = useSupabaseClient();
	const user = useUser();
  const session = useSession();
  const { supabaseAccessToken } = session;
	// const [data, setData] = useState();
	// const [email, setEmail] = useState();
	// const [loading, setLoading] = useState(false);
	// const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

	// useEffect(() => {
	// 	async function loadData() {
	// 		const { data } = await supabaseClient.from("Users").select("id").eq(user.id);
	// 		setData(data);
	// 	}
	// 	// Only run query once user is logged in.
	// 	if (user) loadData();
	// }, [user]);

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

  async function signInWithEmail(e) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true)
		const { data, error } = await supabaseClient.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: getURL()
			}
		});
    setLoading(false)
	}

	if (!supabaseAccessToken){
		return (
			// <Auth
			// 	redirectTo="https://mysubtlehabits.vercel.app/"
			// 	appearance={{ theme: ThemeSupa }}
			// 	supabaseClient={supabaseClient}
			// 	providers={['email']}
			// 	socialLayout="horizontal"
			// />
      <div>
      {!submitted ? <form onSubmit={(e) => signInWithEmail(e)}>
        <label htmlFor="email">Email</label>
        <input 
        id='email'
        value={email}
        type='text'
        onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      : <h1>Please check your email to sign in</h1>
    }
    </div>
		)
     } else {
      router.push("/authorized/profile");
      console.log('user: ', user);
    }
    
	// return <HomePage data={data} />
};

export default LoginPage;
