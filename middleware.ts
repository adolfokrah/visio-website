import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./lib/contants";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const locals = locales.supportedLanguages.map((lang) => lang.locale);

  const { pathname } = request.nextUrl;
  if (pathname != "/" && !pathname.startsWith("/cms")) {
    const localeFromPath = pathname.split("/")[1];
    if (!locals.includes(localeFromPath)) {
      return NextResponse.redirect(
        new URL(
          `/${locales.defaultLanguage.locale}${pathname}`,
          request.nextUrl,
        ).toString(),
      );
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|videos).*)",
};
