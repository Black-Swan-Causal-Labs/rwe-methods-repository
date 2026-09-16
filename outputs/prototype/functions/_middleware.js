export async function onRequest(context) {
  const response = await context.next();
  const securedResponse = new Response(response.body, response);
  securedResponse.headers.set('Cache-Control', 'no-store');
  securedResponse.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  securedResponse.headers.set('X-Content-Type-Options', 'nosniff');
  securedResponse.headers.set('Referrer-Policy', 'no-referrer');
  return securedResponse;
}
