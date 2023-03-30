// import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";

export async function middleware(req, res, next){
    // const supabase = createMiddlewareSupabaseClient({ req, res });
	// const {
    //     data: { session }
	// } = await supabase.auth.getSession();
    // if(!session?.user){
    //     return NextResponse.redirect('https://mysubtlehabits.vercel.app/')
    // } else {
    //     return NextResponse.next();
    // }
}

// export const config = {
// 	matcher: "/authorized/(.*)"
// };