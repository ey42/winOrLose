import { auth } from "auth";

import { NextRequest, NextResponse } from "next/server";


// export default auth((req) => {
// if(!req.auth && req.nextUrl.pathname !== "login"){
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
// }
// })

export default auth((req) => {    
    console.log("middleware is trigger",req.auth)
    console.log("middleware url", req.url)
    if(!req.auth){
return Response.redirect(new URL("/login", req.url))
    }
    if(req.auth && req.nextUrl.pathname.startsWith("/login")){
        return Response.redirect(new URL("/play", req.url))
    }
})

export const config = {
    matcher: ["/play"],
  }