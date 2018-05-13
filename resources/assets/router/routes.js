import layout_routes from './layout'

const routes = [{
    path: '/',
    component: resolve => require(['src/layout'], resolve),
    children: layout_routes
    }, {
        path: '/login',
        component: resolve => require(['pages/login'], resolve),
        meta: {
            title: "Login",
        }
    }, {
        path: '/register',
        component: resolve => require(['pages/register'], resolve),
        meta: {
            title: "register",
        }
    }, {
        path: '/forgotpassword',
        component: resolve => require(['pages/forgotpassword'], resolve),
        meta: {
            title: "Forgot Password",
        }
    }, {
        path: '/reset_password',
        component: resolve => require(['pages/reset_password'], resolve),
        meta: {
            title: "Reset Password",
        }
    }, {
        path: '/lockscreen',
        component: resolve => require(['pages/lockscreen'], resolve),
        meta: {
            title: "Lockscreen",
        }
    }, {
        path: '/500',
        component: resolve => require(['pages/500'], resolve),
        meta: {
            title: "500",
        }
    },
    {
        path: '*',
        component: resolve => require(['pages/404'], resolve),
        meta: {
            title: "404",
        }
    },{
        path: '/blank',
        component: resolve => require(['pages/blank'], resolve),
        meta: {
            title: "sample hello world",
        }
    },
    {
        path: '/testtwo',
        component: resolve => require(['pages/testtwo'], resolve),
        meta: {
            title: "sample hello world",
        }
    
    },  
    {
        path: '/user-profiles',
        component: resolve => require(['pages/admin/user-profiles'], resolve),
        meta: {
            title: "User Profiles",
        }
    }, 
    {
        path: '/assign-game',
        component: resolve => require(['pages/assigner/assign-game'], resolve),
        meta: {
            title: "Assign Game",
        }
    }, 
    {
        path: '/create-game',
        component: resolve => require(['pages/creator/create-game'], resolve),
        meta: {
            title: "Create Game",
        }
    }, 
    {
        path: '/play-game',
        component: resolve => require(['pages/player/play-game'], resolve),
        meta: {
            title: "Play Game",
        }
    } 
]
export default routes
