import { useState } from "react";
import styles from "../styles/Home.module.css";
import { supabase } from "../client";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const signIn = async () => {
		if (!email) return;
		// const { error, data } = await supabase.auth.signIn({
		// 	email
		// });

		const { data, error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				emailRedirectTo: "http://localhost:3000/profile"
			}
		});

		if (error) {
			console.log("error: ", { error });
		} else {
			setSubmitted(true);
		}
	};
	if (submitted) {
		return (
			<div className={styles.container}>
				<h1>Please check your email to sign in</h1>
			</div>
		);
	} else {
		return (
			<div className={styles.container}>
				<main>
					<h1 className={styles.title}>Sign In</h1>
				</main>
				<input
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email..."
					// style={{ margin: 10 }}
				/>
				<button onClick={signIn}>Sign In</button>
			</div>
		);
	}
}
