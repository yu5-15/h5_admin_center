import Vue from 'vue'
import Router from 'vue-router'

 Vue.use(Router)
  //  报错处理
 const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
  }


const routerList =  new Router({
  routes: [
    {path: '/', redirect: '/index' },
    {path:'/index',component: () => import('../views/layout/main.vue')},
    // 登陆
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    // { path: "/view6", name: "工作台", component: () => import('../views/test/view6/view6.vue')},
    {
      path: '/login_admin',
      name: 'login_admin',
      component: () => import('../views/login_admin.vue')
    },
    //登陆后的主页面（上下结构，上部分是导航菜单）
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/layout/main.vue'),
      children: [
        {
          //带左侧菜单的页面（左右结构，左侧是导航菜单）
          path: "sub",
          name: "sub",
          component: () => import('../views/layout/sub.vue'),
          children:[
            //系统用户
            { path: "sys/user/list", name: "用户列表", component: () => import('../views/sys_user/info/list/list.vue')},
            //权限
            { path: "sys/test/list", name: "测试用户列表", component: () => import('../views/sys_user/test_info/list/list.vue')},

            { path: "test/list", name: "用户列表", component: () => import('../views/sys_user/test_info/list/list.vue')},
          ]

        },
        //普通页面，不带左侧菜单的页面
        //真是内容页面
        { path: "view2", name: "view2", component: () => import('../views/test/view2/view2.vue')},
]
    }
    ,
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },

  ]
})


// let router = new Router({
//   routers:[
//   // 路由写在里面
//   routerList
//   ]
//   })

routerList.beforeEach((to, from, next) => {

  if (to.matched.length ===0) {  //如果未匹配到路由
    //from.name ? next({ path:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    next({path:'/404'});
  } else {
    var userObj = localStorage.getItem('user');
    console.info(userObj);

    if (to.name === 'login') {
      //if (auth.IsLogin) {
          //vueRouter.push({name: 'home'});
          next();
      //}
    }else if (to.name === 'login_admin'){
      next();
    }
    else if(userObj == undefined || userObj == null)
    {
      next({path:'/login'});
      //JSON.parse(
    }
    else{
      next();    //如果匹配到正确跳转
    }
  }
});


export default routerList;
