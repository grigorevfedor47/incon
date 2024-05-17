const comments = [
  { body: 'This is a comment.' },
  { body: 'This is another comment.' },
];

// Function to assert that each comment's body is a string
function assertComments(comments) {
  comments.forEach((comment, index) => {
    assert.isString(comment.body, `Comment at index ${index} has a body that is not a string.`);
  });
}

// Call the function with the comments array
assertComments(comments);
