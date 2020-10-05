import Routes from './routes/routes'
import Router from "./routes/router";

const router = new Router(Routes)

window.addEventListener('load', (ev) => {
  router.loadInitialRoute()
})

window.addEventListener("click", (ev) => {
  ev.preventDefault()
  ev.path.forEach(element => {
    if(element !== document && element !== window) {
      if (element.classList.contains('link')) {
        router.loadRoute(element.getAttribute('href'))
      }
    }
  });
})