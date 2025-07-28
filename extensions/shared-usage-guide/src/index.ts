import routes from './routes';
import locales from './locales';

const menus = [
  {
    parent: 'global',
    name: 'usage-guide',
    title: 'Usage Guide',
    icon: 'cluster',
    order: 0,
    desc: 'Usage Guide',
    skipAuth: true,
  },
];

const extensionConfig = {
  routes,
  menus,
  locales,
};

export default extensionConfig;
