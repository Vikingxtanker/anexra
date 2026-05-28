import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

import { createServerClient } from "@supabase/ssr";

export async function proxy(
  request: NextRequest
) {
  let response = NextResponse.next({
    request,
  });

  const supabase =
    createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },

          setAll(cookiesToSet) {
            cookiesToSet.forEach(
              ({ name, value, options }) =>
                request.cookies.set(
                  name,
                  value
                )
            );

            response =
              NextResponse.next({
                request,
              });

            cookiesToSet.forEach(
              ({
                name,
                value,
                options,
              }) =>
                response.cookies.set(
                  name,
                  value,
                  options
                )
            );
          },
        },
      }
    );

  const {
    data: { user },
  } =
    await supabase.auth.getUser();

  // PROTECT DASHBOARD
  if (
    request.nextUrl.pathname.startsWith(
      "/student/dashboard"
    ) &&
    !user
  ) {
    return NextResponse.redirect(
      new URL(
        "/student/login",
        request.url
      )
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/student/dashboard/:path*",
  ],
};