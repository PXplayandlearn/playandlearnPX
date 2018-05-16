import layout_routes from './layout'
import link from './index'

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
        path: '/manager-users',
        component: resolve => require(['pages/admin/manage-users'], resolve),
        meta: {
            title: "Manage Users",
        }
    }, 
    {
        path: '/assign-game',
        component: resolve => require(['pages/admin/assign-game'], resolve),
        meta: {
            title: "Assign Game",
        }
    }, 
    {
        path: '/create-game',
        component: resolve => require(['pages/admin/create-game'], resolve),
        meta: {
            title: "Create Game",
        }
    }, 
    {
        path: '/play-game',
        component: resolve => require(['pages/admin/play-game'], resolve),
        meta: {
            title: "Play Game",
        }
    }, 
    {
        path: '/scoreboard',
        component: resolve => require(['pages/admin/scoreboard'], resolve),
        meta: {
            title: "Scoreboard",
        }
    }, 
    {
        path: '/achievements',
        component: resolve => require(['pages/player/achievements'], resolve),
        meta: {
            title: "Achievements",
        }
    },
    {
        path: '/my-profile',
        component: resolve => require(['pages/user_profile'], resolve),
        meta: {
            title: "My Profile",
        }
        }, 
        {
        path: '/game-summaries',
        component: resolve => require(['pages/admin/game-summaries'], resolve),
        meta: {
            title: "Game Summaries",
        }

}]
export default routes
