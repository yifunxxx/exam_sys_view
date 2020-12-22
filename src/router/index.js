import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    redirect: '/main',
    component: () => import( /* webpackChunkName: "index" */ '@/views/index'),
    meta: {
      title: '首页'
    },
    children: [{
        path: "/main",
        name: "main",
        component: () => import('@/views/main'),
        meta: {
          title: '首页'
        },
      },
      {
        path: "/error",
        name: "error",
        component: () => import( /* webpackChunkName: "error" */ '@/views/error'),
        meta: {
          title: '错误地址'
        },
      },
      {
        path: "/order",
        name: "order",
        component: () => import('@/views/stu_page/order'),
        meta: {
          title: '个人中心'
        },
      },
      {
        path: "/exam",
        name: "exam",
        component: () => import('@/views/stu_page/exam'),
        meta: {
          title: '在线考试'
        },
        children:[,
          {
            path: "/selectquestion",
            name: "selectquestion",
            component: () => import('@/views/stu_page/selectQuestion'),
            meta: {
              title: '选择题'
            },
          },
          {
            path: "/judgequestion",
            name: "judgequestion",
            component: () => import('@/views/stu_page/judgeQuestion'),
            meta: {
              title: '判断题'
            },
          },
          {
            path: "/fillblankquestion",
            name: "fillblankquestion",
            component: () => import('@/views/stu_page/fillblankQuestion'),
            meta: {
              title: '填空题'
            },
          },]
      },
      {
        path: "/score",
        name: "score",
        component: () => import('@/views/stu_page/score'),
        meta: {
          title: '考试成绩'
        },
      },
      {
        path: "/errorquestion",
        name: "errorquestion",
        component: () => import('@/views/stu_page/errorQuestion'),
        meta: {
          title: '错题集'
        },
      },
      {
        path: "/allscore",
        name: "allscore",
        component: () => import('@/views/tech_page/allScore'),
        meta: {
          title: '成绩统计'
        },
      },
      {
        path: "/exammanager",
        name: "exammanager",
        component: () => import('@/views/tech_page/examManager'),
        meta: {
          title: '试卷管理'
        },
      },
      {
        path: "/subexam",
        name: "subexam",
        component: () => import('@/views/tech_page/subExam'),
        meta: {
          title: '发布试卷'
        },
      },
      {
        path: "/coursemanager",
        name: "coursemanager",
        component: () => import('@/views/ad_page/courseManager'),
        meta: {
          title: '学科管理'
        },
      },
      {
        path: "/csmanager",
        name: "csmanager",
        component: () => import('@/views/ad_page/csManager'),
        meta: {
          title: '班级管理'
        },
      },
      {
        path: "/usermanager",
        name: "usermanager",
        component: () => import('@/views/ad_page/userManager'),
        meta: {
          title: '用户管理'
        },
      },
      {
        path: "/rolemanager",
        name: "rolemanager",
        component: () => import('@/views/ad_page/roleManager'),
        meta: {
          title: '角色管理'
        },
      },
      {
        path: "/menumanager",
        name: "menumanager",
        component: () => import('@/views/ad_page/menuManager'),
        meta: {
          title: '菜单管理'
        },
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import( /* webpackChunkName: "login" */ '@/views/login'),
    meta: {
      title: '登录'
    },
  },
  {
    path: "*",
    name: "404",
    component: () => import( /* webpackChunkName: "error" */ '@/views/error'),
    meta: {
      title: '404'
    },
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  NProgress.start();
  if (!localStorage.getItem("userInfo")) {
    if (to.path == '/login') {
      next()
    } else {
      next({
        path: '/login'
      })
      NProgress.done()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router