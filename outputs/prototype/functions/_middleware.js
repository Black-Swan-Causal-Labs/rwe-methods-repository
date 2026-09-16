const encoder = new TextEncoder();

async function digest(value) {
  const bytes = encoder.encode(value);
  return new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
}

function equalBytes(left, right) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index] ^ right[index];
  }
  return difference === 0;
}

function unauthorized() {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'Cache-Control': 'no-store',
      'WWW-Authenticate': 'Basic realm="RWE Methods Repository", charset="UTF-8"',
    },
  });
}

export async function onRequest(context) {
  const expectedUsername = context.env.PROTOTYPE_USERNAME;
  const expectedPassword = context.env.PROTOTYPE_PASSWORD;

  // Fail closed if Cloudflare secrets have not been configured.
  if (!expectedUsername || !expectedPassword) {
    return new Response('Prototype authentication is not configured.', {
      status: 503,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  const authorization = context.request.headers.get('Authorization');
  if (!authorization?.startsWith('Basic ')) return unauthorized();

  let suppliedCredentials;
  try {
    suppliedCredentials = atob(authorization.slice(6));
  } catch {
    return unauthorized();
  }

  const separator = suppliedCredentials.indexOf(':');
  if (separator < 0) return unauthorized();

  const suppliedUsername = suppliedCredentials.slice(0, separator);
  const suppliedPassword = suppliedCredentials.slice(separator + 1);
  const [usernameHash, expectedUsernameHash, passwordHash, expectedPasswordHash] = await Promise.all([
    digest(suppliedUsername),
    digest(expectedUsername),
    digest(suppliedPassword),
    digest(expectedPassword),
  ]);

  if (!equalBytes(usernameHash, expectedUsernameHash) || !equalBytes(passwordHash, expectedPasswordHash)) {
    return unauthorized();
  }

  const response = await context.next();
  const securedResponse = new Response(response.body, response);
  securedResponse.headers.set('Cache-Control', 'private, no-store');
  securedResponse.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  securedResponse.headers.set('X-Content-Type-Options', 'nosniff');
  securedResponse.headers.set('Referrer-Policy', 'no-referrer');
  return securedResponse;
}
