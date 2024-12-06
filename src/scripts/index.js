import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import Aos from 'aos';

const AOS = Aos;

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});


AOS.init();
