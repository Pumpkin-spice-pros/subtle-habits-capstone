import SignOutButton from "../../../components/SignOutButton";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Index() {
    const user = useUser();
  return (
    <div>
        <h1>Profile</h1>
        <h1>user: {user}</h1>
        <SignOutButton />
    </div>
  )
}