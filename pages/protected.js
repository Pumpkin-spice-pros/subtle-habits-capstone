import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function ProtectedPage({ user, data }) {
	return (
		<>
			<div>Protected content for {user.email}</div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</>
	);
}

export const getServerSideProps = async (ctx) => {
	// Create authenticated Supabase Client
	const supabase = createServerSupabaseClient(ctx);
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











// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { supabase } from "../client";

// export default function Profile() {
//     const [user, setUser] = useState(null);
//     const router = useRouter();
//     useEffect(() => {
//         const { user } = supabase.auth.getUser();
//         if(!user){
//             router.push('/sign-in')
//         } else {
//             setUser(user);
//         }
//     }, )
//   return (
//     <div style={{ maxWidth: '420px', margin: '96px auto' }}>
//         <h1>this is a protected route, you are signed in</h1>
//         <h2>user object: {JSON.stringify(user)}</h2>
//     </div>
//   )
// }

// // export async function getServerSideProps() {
// //     const { user } = supabase.auth.getUser();
// //     if(!user){
// //         return {
// //             props: {},
// //             redirect: {
// //                 destination: '/sign-in'
// //             }
// //         }
// //     }else {
// //         const user = supabase.auth.getUser();
// //         return {
// //             props: {
// //                 user
// //             }
// //         }
// //     }
// // }
// // export async function getServerSideProps({ req }) {
// //     const { user } = await supabase.auth.api.getUserByCookie(req);
// //     if(!user){
// //         return {
// //             props: {},
// //             redirect: {
// //                 destination: '/sign-in'
// //             }
// //         }
// //     }
// //     return {
// //         props: {
// //             user
// //         }
// //     }
// // }
