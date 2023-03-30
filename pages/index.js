import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import HomePage from "../components/HomePage";
import { useRouter } from "next/router";
// import { supabase } from "../client";

const LoginPage = () => {
	const supabaseClient = useSupabaseClient();
	const user = useUser();
	// const [data, setData] = useState();
	const [email, setEmail] = useState();
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

	// useEffect(() => {
	// 	async function loadData() {
	// 		const { data } = await supabaseClient.from("Users").select("id").eq(user.id);
	// 		setData(data);
	// 	}
	// 	// Only run query once user is logged in.
	// 	if (user) loadData();
	// }, [user]);

  async function signInWithEmail(e) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true)
		const { data, error } = await supabaseClient.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: "https://mysubtlehabits.vercel.app"
			}
		});
    setLoading(false)
	}

	if (!user){
		return (
			// <Auth
			// 	redirectTo="https://mysubtlehabits.vercel.app/"
			// 	appearance={{ theme: ThemeSupa }}
			// 	supabaseClient={supabaseClient}
			// 	providers={[]}
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
