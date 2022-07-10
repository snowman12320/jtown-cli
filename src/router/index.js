// which is lazy-loaded when the route is visited.

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/newpage',
        name: '新增頁面',
        component: () => import('../views/NewPage.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;