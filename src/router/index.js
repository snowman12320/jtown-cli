import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView,
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/products-view',
    name: 'products-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/ProductsView.vue'),
    children: [
      {
        path: '/products-view/products-content',
        component: () => import('../views/ProductsContent.vue')
      },
      {
        path: '/products-view/products-item',
        component: () => import('../views/ProductsItem.vue')
      }
    ]
  },
  {
    path: '/cart-view',
    name: 'cart-view',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/CartView.vue'),
    children: [
      {
        path: '/cart-view/cart-list',
        component: () => import('../views/CartList.vue')
      },
      {
        path: '/cart-view/cart-done',
        component: () => import('../views/CartDone.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Coupons.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;
