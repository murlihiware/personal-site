const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Murli Hiware',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Murli Hiware',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Murli Hiware',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Murli Hiware',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Murli Hiware',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
