const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 1,
    post_id: 10
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 4,
    post_id: 18
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;