import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId:"502531248944-geqqani0quqrv51qkjsncris6r8l6s5l.apps.googleusercontent.com",
            clientSecret:"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"
        })
    ]
})