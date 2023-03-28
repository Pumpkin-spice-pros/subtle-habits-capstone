import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

const supabase = createBrowserSupabaseClient();

export default async function handler(req, res){
    const { username, id, email } = req.body;
    const info = {
        username,
        id,
        email
    }
    const { error } = await supabase.from('Users').insert({ id: id, email: email, username: username });
    if(error){
        res.status(400)
    }
    res.status(200);
}