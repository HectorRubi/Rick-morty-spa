import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import Character from '../pages/Character'

const Routes = [
  {
    path: '/',
    template: Home
  },
  {
    path: '/:id',
    template: Character
  },
  {
    path: '/404',
    template: Error404
  }
]

export default Routes