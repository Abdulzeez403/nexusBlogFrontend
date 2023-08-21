import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export default NextAuth({
    providers: [
        CredentialsProvider({
          id: 'credentials',
          name: 'my-project',
          credentials: {
            email: {
              label: 'email',
              type: 'email',
              placeholder: 'jsmith@example.com',
            },
            password: { label: 'Password', type: 'password' }
          },
          async authorize(credentials, req) {
            // const payload = {
            //   email: credentials.email,
            //   password: credentials.password,
            // };
    
            const res = await fetch('http://localhost:5000/api/user/Login', {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            const user = await res.json();
            if (!res.ok) {
              throw new Error(user.message);
            }
            // If no error and we have user data, return it
            if (res.ok && user) {
              return user;
            }
    
            // Return null if user data could not be retrieved
            return null;
          },
        }),
        // ...add more providers here
      ],
      secret: process.env.JWT_SECRET,
      pages: {
        signIn: '/login',
      },
      callbacks: {
        async jwt({ token, user, account }) {
          if (account && user) {
            return {
              ...token,
              accessToken: user.token,
              refreshToken: user.refreshToken,
            };
          }
    
          return token;
        },
    
        async session({ session, token}) {
          session.accessToken = token?.accessToken;
            
          return session;
        },
      },
})