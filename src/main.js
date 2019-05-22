import App from './App.svelte';
import Selector from './Selector.svelte';

const locale = window.LOCALE || document.documentElement.lang || 'en';
const appElement = document.getElementById('app');

const app = window.DBNAME
  ? new App({
      target: appElement,
      props: {
        locale
      }
    })
  : new Selector({
      target: appElement,
      locale
    });

export default app;
