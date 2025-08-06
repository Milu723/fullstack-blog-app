```javascript
const { test, expect } = require('@playwright/test');

test('Confirm the server correctly parses JSON data in requests', async ({ request }) => {
  const newPost = {
    title: 'Test Post',
    content: 'This is a test post created by Playwright.',
  };

  const response = await request.post('/api/posts/add', {
    data: newPost,
  });

  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody).toEqual(expect.objectContaining({message: "Post added!"}));
});
```