import {test} from 'node:test';
import assert from 'node:assert/strict';
import {onRequest} from '../functions/_middleware.js';
for (const path of ['/', '/dataset.json', '/repository-learning-skill.zip', '/assets/app.js']) {
  test(`public access without credentials: ${path}`, async () => {
    const response = await onRequest({env: {}, request: new Request('https://example.com'+path), next: () => new Response('pilot content')});
    assert.equal(response.status, 200);
    assert.equal(await response.text(), 'pilot content');
    assert.equal(response.headers.has('WWW-Authenticate'), false);
    assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, nofollow, noarchive');
  });
}
