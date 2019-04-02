import Main from "_b/components/main";

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'_b/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login - 登录",
      hideInMenu: true
    },
    component: () => import("_b/view/login/login.vue")
  },
  {
    path: "/",
    name: "_home",
    redirect: "/home",
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          hideInMenu: true,
          title: "首页",
          notCache: true,
          icon: "md-home"
        },
        component: () => import("_b/view/home")
      }
    ]
  },
  {
    path: "/activities",
    name: "activities",
    meta: {
      icon: "md-add",
      title: "我的课/活动"
    },
    component: Main,
    children: [
      {
        path: "activity-list",
        name: "activity-list",
        meta: {
          icon: "md-add",
          title: "课/活动列表"
        },
        component: () => import("../view/activities/activity-list")
      },
      {
        path: "comment-list",
        name: "comment-list",
        meta: {
          icon: "md-add",
          title: "留言列表"
        },
        component: () => import("../view/activities/comment-list")
      }
    ]
  },
  {
    path: "/schedules",
    name: "schedules",
    meta: {
      icon: "md-add",
      title: "课表管理"
    },
    component: Main,
    children: [
      {
        path: "need-audits",
        name: "need-audits",
        meta: {
          icon: "md-add",
          title: "待审核列表"
        },
        component: () => import("../view/schedules/need-audits")
      },
      {
        path: "school-schedule",
        name: "school-schedule",
        meta: {
          icon: "md-add",
          title: "学校课表"
        },
        component: () => import("../view/schedules/school-schedule")
      },
      {
        path: "permission-manage",
        name: "permission-manage",
        meta: {
          icon: "md-add",
          title: "权限管理"
        },
        component: () => import("../view/schedules/permission-manage")
      }
    ]
  },
  {
    path: "/schools",
    name: "schools",
    meta: {
      icon: "md-add",
      title: "学校管理"
    },
    component: Main,
    children: [
      {
        path: "school-list",
        name: "school-list",
        meta: {
          icon: "md-add",
          title: "学校列表"
        },
        component: () => import("../view/schools/school-list")
      }
    ]
  },
  {
    path: "/permissions",
    name: "permissions",
    meta: {
      icon: "md-add",
      title: "权限管理"
    },
    component: Main,
    children: [
      {
        path: "province-manage",
        name: "province-manage",
        meta: {
          icon: "md-add",
          title: "课/活动列表"
        },
        component: () => import("../view/permissions/province-manage")
      },
      {
        path: "county-manage",
        name: "county-manage",
        meta: {
          icon: "md-add",
          title: "课/活动列表"
        },
        component: () => import("../view/permissions/county-manage")
      },
      {
        path: "school-manage",
        name: "school-manage",
        meta: {
          icon: "md-add",
          title: "留言列表"
        },
        component: () => import("../view/permissions/school-manage")
      }
    ]
  },
  {
    path: "/statistics",
    name: "statistics",
    meta: {
      icon: "md-add",
      title: "信息统计"
    },
    component: Main,
    children: [
      {
        path: "info-statistics",
        name: "info-statistics",
        meta: {
          icon: "md-add",
          title: "信息统计"
        },
        component: () => import("../view/statistics/info-statistics")
      }
    ]
  },
  {
    path: "/course",
    name: "course",
    meta: {
      icon: "md-add",
      title: "课程详情",
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: "course-detail",
        name: "course-detail",
        meta: {
          icon: "md-add",
          title: "课程详情"
        },
        component: () => import("../view/course/detail")
      },
      {
        path: "create-edit",
        name: "create-edit",
        meta: {
          icon: "md-add",
          title: route =>
            route.query.type == "create" ? "创建课程" : "编辑课程"
        },
        component: () => import("../view/course/create-edit")
      }
    ]
  },
  {
    path: "/401",
    name: "error_401",
    meta: {
      hideInMenu: true
    },
    component: () => import("_b/view/error-page/401.vue")
  },
  {
    path: "/500",
    name: "error_500",
    meta: {
      hideInMenu: true
    },
    component: () => import("_b/view/error-page/500.vue")
  },
  {
    path: "*",
    name: "error_404",
    meta: {
      hideInMenu: true
    },
    component: () => import("_b/view/error-page/404.vue")
  }
];
