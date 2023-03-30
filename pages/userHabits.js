import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import prisma from "../lib/prisma";

export default function UserHabits() {
	const [user, setUser] = useState(null);
	const [habits, setHabits] = useState([]);
	const router = useRouter();

	const fetchUser = async () => {
		const userEmail = sessionStorage.getItem("user_email");
		if (!userEmail) {
			router.push("/sign-in");
		} else {
			const fetchedUser = await prisma.usernames.findUnique({
				where: { email: userEmail },
			});
			setUser(fetchedUser);
		}
	};

	const fetchHabits = async () => {
		const fetchedHabits = await prisma.userHabits.findMany({
			where: { userId: user.id },
			include: { habits: true },
		});
		setHabits(fetchedHabits);
	};

	const signOut = () => {
		sessionStorage.clear();
		router.push("/sign-in");
	};

	useEffect(() => {
		fetchUser();
	}, []);

	useEffect(() => {
		if (user) {
			fetchHabits();
		}
	}, [user]);

	if (!user) return null;

	return (
		<div style={{ maxWidth: "420px", margin: "96px auto" }}>
			<h2>Hello {user.firstName}!</h2>
			<p>User ID: {user.id}</p>
			<button onClick={signOut}>Sign Out</button>

			<h3>Habits</h3>
			{habits.map((userHabit) => (
				<div key={userHabit.id}>
					<p>
						{userHabit.habits.name}:{" "}
						{userHabit.isCompletedToday ? "Done" : "Not Done"}
					</p>
				</div>
			))}
		</div>
	);
}
