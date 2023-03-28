// "use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import { useRouter } from "next/router";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
import HomePage from "../components/HomePage";
import { supabase } from '../client'


const Home = ({ user }) => {
	const session = useSession();
	const supabase = useSupabaseClient();
	const username = supabase.from("profiles").select("username");
  console.log(session);
	if (!session) {
		return (
			<div className="container" style={{ padding: "50px 0 100px 0" }}>
				<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
					theme="dark"
				/>
			</div>
		);
	}
	if (!username) {
		return <Account session={session} />;
	} else {
		return <HomePage />;
	}
};

export const getServerSideProps = async () => {
	// Create authenticated Supabase Client
	// Check if we have a session
	const {
		data: { session }
	} = await supabase.auth.getSession();

	if (!session)
		return {
			redirect: {
				destination: "/",
				permanent: false
			}
		};

	// Run queries with RLS on the server
	const { data } = await supabase.from("users").select("*");

	return {
		props: {
			initialSession: session,
			user: session.user,
			data: data ?? []
		}
	};
};

export default Home;

// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           hello world
//         </h1>
//       </main>
//     </div>
//   )
// }
