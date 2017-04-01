// import index from '../pages/index'

/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    // {
    //     path: '/index',
    //     component: resolve => require(['../pages/index'], resolve),
    //     children: [
    //         {
    //             path : '/index/home',
    //             component: resolve => require(['../pages/home'], resolve)
    //         }
    //     ]
    // },
    {
        path: '/login',
        component: resolve => require(['../pages/login'], resolve)
    },
    {
        path: '/home',
        component: resolve => require(['../pages/home'], resolve)
    },
    {
        path: '/register',
        component: resolve => require(['../pages/register'], resolve)
    },
    {
        path: '*', //其他页面，强制跳转到登录页面
        redirect: '/login'
    }
];