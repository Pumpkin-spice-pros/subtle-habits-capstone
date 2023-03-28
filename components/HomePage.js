import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import MainLayout from "../layouts/MainLayout";
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { supabase } from "../client";


export default function HomePage({ profiles }) {
	useEffect(() => {
		console.log('profiles', profiles);
	}, [])

  return (
		<MainLayout>
			<div className={styles.mainPage}>
				<div className={styles.week}>
					<div className={styles.day}>S</div>
					<div className={styles.day}>M</div>
					<div className={styles.day}>T</div>
					<div className={styles.day}>W</div>
					<div className={styles.day}>T</div>
					<div className={styles.day}>F</div>
					<div className={styles.day}>S</div>
				</div>
				<div className={styles.mainHeader}>
					<h1>Today</h1>
				</div>
				<div className={styles.dailyHabitsList}>
					<h3>Morning</h3>
					<hr />
					<h3>Afternoon</h3>
					<hr />
					<h3>Evening</h3>
					<hr />
					<h3>Any Time</h3>
					<hr />
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps = async () => {
	// select id, email, and username info from profile table
	let { data: profiles, error } = await supabase.from("profiles").select("id");
	return {
		props: {
			profiles
		}
	}
	

	// find that unique row in the "Users" table



	// insert that data into other Users table if it does now already exist
	// const { data, error } = await supabase
	// 	.from("Users")
	// 	.update({ other_column: "otherValue" })
	// 	.eq("some_column", "someValue");




	// return the user column as as a prop to the homepage component for use as a prop throughout the app

	// return {
	// 	props: {
	// 		user:,
	// 	}
	// }
}


// export const getServerSideProps = async (ctx) => {
// 	// Create authenticated Supabase Client
// 	const supabase = createServerSupabaseClient(ctx);
// 	// Check if we have a session
// 	const {
// 		data: { session }
// 	} = await supabase.auth.getSession();

// 	if (!session)
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false
// 			}
// 		};

// 	// Run queries with RLS on the server
// 	const { sessionData } = await supabase.from("users").select("*");
	
// 	const { error } = await supabase
// 		.from("countries")
// 		.update({ name: "Australia" })
// 		.eq("id", 1);

//     const id = supabase.from("profiles").select("id");
//     const user = supabase.auth.getUser();
//     const email = user.email;

	
// 	const inserting = await supabase
// 		.from("Users")
// 		.insert([{ userId: id, username: username }]);


// 	if(inserting.error){
// 		alert('error occured: in function getServerSideProps() in HomePage.js')
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false
// 			}
// 		};
// 	}

// 	const { data, error } = await supabase
//   		.from('countries')
//   		.select()
//   		.eq('userId', 'id')
// 	if(error){
// 		alert("error occured: in function getServerSideProps() in HomePage.js");
// 		return {
// 			redirect: {
// 				destination: "/",
// 				permanent: false
// 			}
// 		};
// 	}
// 	return {
// 		props: {
// 			sessionData,
// 			user: data
// 		}
// 	}


//     // await fetch('/api/user', {
// 	// 	method: 'POST',
//     //     body: {
//     //         id,
//     //         username,
//     //         email
//     //     }
//     // })
//     // .then(res => {
//     //     if(res.status === 400){
//     //         return {
// 	// 			props: {
// 	// 				initialSession: session,
// 	// 				session: session,
// 	// 				user: user,
// 	// 				data: data ?? []
// 	// 			}
// 	// 		};
//     //     } else {
// 	// 		return {
// 	// 			redirect: {
// 	// 				destination: "/",
// 	// 				permanent: false
// 	// 			}
// 	// 		};
// 	// 	}
//     // })
// };