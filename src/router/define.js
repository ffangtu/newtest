export default {
  Home: {
    name: 'Home',
    path: '/Home',
    component: () => import('@/views/Home')
  },
  Child: {
    name: 'Child',
    path: 'Child',
    component: () => import('@/views/Child')
  }
}
