import Vue from "vue";
import Router from "vue-router";
import Layout from "../components/Layout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/index.vue")
    },
    // 条件搜索
    {
      path: "/optionSearch",
      name: "optionSearch",
      component: Layout,
      children: [
        {
          path: "",
          name: "search",
          component: () => import("../views/optionSearch/index.vue")
        }
      ]
    },
    {
      path: "/information",
      name: "information",
      component: Layout,
      children: [
        {
          path: "",
          name: "classInformation",
          component: () => import("../views/information/index.vue")
        }
      ]
    },
    // 当日直播
    {
      path: "/live",
      name: "live",
      component: Layout,
      children: [
        {
          path: "",
          name: "toadyLive",
          component: () => import("../views/live/index.vue")
        }
      ]
    },
    // 热点活动
    {
      path: "/hot",
      name: "hot",
      component: Layout,
      children: [
        {
          path: "",
          name: "hotClass",
          component: () => import("../views/hot/index.vue")
        },
        {
          path: "hotSchool",
          name: "hotSchool",
          component: () => import("../views/hot/hotSchool.vue")
        }
      ]
    },
    // 课表
    {
      path: "/schedule",
      name: "schedule",
      component: Layout,
      children: [
        {
          path: "schoolDaySchedule",
          name: "schoolDaySchedule",
          component: () => import("../views/schedule/schoolDaySchedule.vue")
        },
        {
          path: "schoolWeekSchedule",
          name: "schoolWeekSchedule",
          component: () => import("../views/schedule/schoolWeekSchedule.vue")
        }
      ]
    },
    // 智能课表
    {
      path: "/smartSchedule",
      name: "",
      component: Layout,
      children: [
        {
          path: "",
          name: "index",
          component: () => import("../views/smartSchedule/index.vue")
        },
        {
          path: "schoolDaySchedule",
          name: "smartSchoolDaySchedule",
          component: () =>
            import("../views/smartSchedule/schoolDaySchedule.vue")
        },
        {
          path: "schoolWeekSchedule",
          name: "smartSchoolWeekSchedule",
          component: () =>
            import("../views/smartSchedule/schoolWeekSchedule.vue")
        }
      ]
    }
  ]
});
