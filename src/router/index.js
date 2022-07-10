import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    // 1.Vue Cli 中使用 Vue Router
    path: '/newpage',
    name: '新增頁面',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPage.vue'),
    // 3.巢狀路由
    // https://imgur.com/a/mwABBGr
//     關於你的問題，
// 是透過 <router-view></router-view> 來渲染元件內容。
// 在課程章節「巢狀路由」的流程運作如下：
// (Step 1) 建立獨立元件 Component A.vue、Component B.vue
// (Step 2) 路由表的 /newpage 下透過屬性 children 建立巢狀路由
// (Step 3) 獨立元件 NewPage.vue 分成選單(class='col-4')和內容(class='col-8')：
// 選單透過 <router-link to='路由'><router-link> 來切換元件、
// 內容透過 <router-view></router-view> 來渲染。
// 最後的結果如同圖示二、三，
// 當路由是 /newpage/a 會渲染 Component A.vue 的內容、
// 當路由是 /newpage/b 會渲染 Component B.vue 的內容。
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      // 5.動態路由
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      //6.動態路由 搭配props
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route:', route);
          return {
            id: route.params.id,
          };
        },
      },
      // 4.多個視圖 具名視圖
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA'),
            },
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB'),
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
