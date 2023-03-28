import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../client";

export default function Profile() {
	const [profile, setProfile] = useState(null);
	const router = useRouter();

    // const fetchProfile = async () => {
    //     const { user } = await supabase.auth.getUser();
    //     // console.log(profileData);
    //     if(!user){
    //         router.push('/sign-in');
    //     }else {
    //         setProfile(user);
    //     }
    // }

    const signOut = async () => {
        await supabase.auth.signOut();
        // setProfile(null);
        router.push('/sign-in');
    }

	// useEffect(() => {
	// 	fetchProfile();
	// }, []);

	// if (!profile) return null;
	return (
		<div style={{ maxWidth: '420px', margin: '96px auto' }}>
			<h2>Hello</h2>
            <p>User ID:</p>
            <button onClick={signOut}>Sign Out</button>
		</div>
	);
}
