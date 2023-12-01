import createMiddleware from 'next-intl/middleware';

export const locales: string[] = ['en', 'uk'];
 
export default createMiddleware({
  locales,
  defaultLocale: 'uk'
});
 
export const config = {
  matcher: ['/', '/(uk|en)/:path*']
};