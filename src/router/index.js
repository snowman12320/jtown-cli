import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    // name: 'HomeView'
    // * 事先import的方式
    component: HomeView
    // component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/products-view',
    // name: 'ProductsView',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/ProductsView.vue'),
    children: [
      {
        path: 'products-content',
        component: () => import('../views/ProductsContent.vue')
      },
      {
        path: 'products-item/:productId',
        component: () => import('../views/ProductsItem.vue')
      }
    ]
  },
  {
    path: '/cart-view',
    // name: 'cart-view',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/CartView.vue'),
    children: [
      {
        path: 'cart-list',
        component: () => import('../views/CartList.vue')
      },
      {
        path: 'cart-done',
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

// !根據這段程式碼，`linkActiveClass`屬性是用來定義當路由被激活時所使用的 CSS 類別名稱。因此，你可以在 CSS 檔案中定義這個類別的樣式，例如：
// .active {
//   color: red;
//   font-weight: bold;
//   /* 其他樣式 */
// }
// 當路由被激活時，Vue Router 會自動將 `linkActiveClass` 屬性所設定的類別名稱加到該路由的連結上，因此該連結就會套用上述定義的樣式。

// *每個路由都有一個名稱 (name) 屬性：
// 要在程式中導航到名為 'home' 的路由，你可以使用 $router.push 方法，傳遞一個包含 name 屬性的對象：
// 導航到名為 'home' 的路由，this.$router.push({ name: 'home' })
// 注意，上述程式碼中的 this.$router 是指 Vue 實例中的路由實例，你可以在 Vue 組件中使用 $router 來訪問它。
// 這樣，當你在程式中調用 this.$router.push({ name: 'home' }) 時，它會導航到名為 'home' 的路由，即 '/home' 路徑對應的組件。
