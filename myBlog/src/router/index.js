export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "pages/layout" */'../pages/home/home.vue'),
      meta : { keepAlive: false, title:'首页',noTpl:true},
      children: [
        {
          path: '/',
          name : 'home-index',
          component : () => import(/* webpackChunkName: "pages/home/" */'../pages/home/components/index.vue'),
          meta : { keepAlive: false, title:'首页列表',noTpl:true},
        },
      ]

    }
  ]
}
