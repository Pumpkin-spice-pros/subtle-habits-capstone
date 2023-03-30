// import '@/styles/globals.css'
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { supabase } from "../client";

export default function MyApp({ Component, pageProps }) {
	// Create a new supabase browser client on every first render.
	// const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	return (
		<SupabaseAuthClient
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}>
			<Component {...pageProps} />
		</SupabaseAuthClient>
	);
}









// import styles from '../styles/globals.css';
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { supabase } from '../client'
// import { useRouter } from 'next/router'

// export default function MyApp({ Component, pageProps}) {
//   const [authenticatedState, setAuthenticatedState] = useState('not-authenticated');
//   const router = useRouter();

//   const checkUser = async () => {
//     const { user } = await supabase.auth.getUser();
//     if(user){
//       setAuthenticatedState('authenticated');
//     }
//   }

//   // const handleAuthChange = async (event, session) => {
//   //   await fetch('/api/auth', {
//   //     method: 'POST',
//   //     headers: new Headers({ 'Content-Type': 'application/json' }),
//   //     credentials: 'same-origin',
//   //     body: JSON.stringify({ event, session })
//   //   })

//   // }

//   useEffect(() => {
//     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
//       // handleAuthChange(event, session);
//       if(event === 'SIGNED_IN'){
//         setAuthenticatedState('authenticated');
//         router.push('/profile')
//       }
//       if(event === 'SIGNED_OUT'){
//         setAuthenticatedState('not-authenticated');
//       }
//     });
//     checkUser();
//     return () => {
//       authListener.unsubscribe();
//     }
//   }, [])
//   return (
// 		<div>
//       <nav style={navStyle}>
//         <Link href='/' style={linkStyle}>Home</Link>
//         <Link href='/profile' style={linkStyle}>Profile</Link>
//         {
//         authenticatedState === 'not-authenticated' &&
//         <Link href='/sign-in' style={linkStyle}>Sign In</Link>
//         }
//         <Link href='/protected' style={linkStyle}>Protected</Link>
//       </nav>
// 			<Component {...pageProps} />
// 		</div>
// 	);
// }

// const linkStyle = {
//   marginRight: 10
// }

// const navStyle = {
//   margin: 20
// }

