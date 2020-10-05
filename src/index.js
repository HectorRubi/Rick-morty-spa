import Routes from './routes/routes'
import Router from "./routes/router";

const router = new Router(Routes)

window.addEventListener('load', (ev) => {
  router.loadInitialRoute()
})