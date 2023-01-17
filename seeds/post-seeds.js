const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 2
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'https://nasa.gov/donec.json',
    user_id: 3
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
