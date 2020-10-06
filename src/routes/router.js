import Header from '../templates/Header'

class Router {
  constructor(routes) {
    this.routes = routes
    this.header = null || document.getElementById('header')
    this.content = null || document.querySelectorAll('[data-router]')[0]
    this.links = null || document.getElementsByClassName('link')
  }

  async loadRoute(...urlSegs) {
    const matchedRoute = this._matchUrlRoute(urlSegs)
    const url = `/${urlSegs.join('/')}`

    history.pushState({}, 'this works', url)

    this.content.innerHTML = await matchedRoute.template()
  }

  _matchUrlRoute(urlSegs) {
    let matchedRoute = this.routes.find(route => {
      const routePathSegs = route.path.split('/').slice(1)

      if (routePathSegs.length !== urlSegs.length) {
        return false
      }
      if (parseInt(urlSegs[0]) !== NaN) {
        if (routePathSegs[0] === ':id') {
          return true
        }
      }
      return routePathSegs.every((routePathSeg, i) => routePathSeg === urlSegs[i])
    })

    if (!matchedRoute) {
      matchedRoute = this.routes.find(route => route.path === '/404')
    }

    return matchedRoute
  }

  loadInitialRoute() {
    this.loadTemplates()
    const pathNmaeSplit = window.location.pathname.split('/')
    const pathSegs = pathNmaeSplit.length > 1 ? pathNmaeSplit.slice(1) : ''
    this.loadRoute(...pathSegs)
  }

  async loadTemplates() {
    this.header.innerHTML = await Header();
  }
}

export default Router