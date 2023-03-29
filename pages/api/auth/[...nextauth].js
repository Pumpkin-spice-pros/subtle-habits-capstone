// import NextAuth from "next-auth"
// import { SupabaseAdapter } from "@next-auth/supabase-adapter"

// // For more information on each option (and a full list of options) go to
// // https://authjs.dev/reference/configuration/auth-config
// export default NextAuth({
// 	// https://authjs.dev/reference/providers/oauth-builtin
// 	providers: [
// 		EmailProvider({
// 			server: process.env.EMAIL_SERVER,
// 			from: process.env.EMAIL_FROM
// 			// maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
// 		})
// 	],
// 	adapter: SupabaseAdapter({
// 		url: process.env.NEXT_PUBLIC_SUPABASE_URL,
// 		secret: process.env.SUPABASE_SERVICE_ROLE_KEY
// 	})
// 	// ...
// });


import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('supabase-url', 'supabase-anon-key');

const options = {
  providers: [
    Providers.Credentials({
      name: 'Supabase',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { user, error } = await supabase.auth.signIn({
          email: credentials.email,
          password: credentials.password
        });

        if (error) {
          throw new Error(error.message);
        }

        return user;
      }
    })
  ],
  adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL,
		secret: process.env.SUPABASE_SERVICE_ROLE_KEY
	}),
  pages: {
    signIn: '/'
  },
  callbacks: {
    session: async (session, user) => {
      session.user.id = user.id;
      return Promise.resolve(session);
    }
  },
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.JWT_SECRET
  }
};

export default (req, res) => NextAuth(req, res, options);
