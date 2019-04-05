<template lang="pug">
.smart
	.smart_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem 智能课表
	.smart_tabs
		Tabs(value="name1")
			TabPane(label="全省课表", name="name1").infor_smart_tabPane
				.smart_schedule_day
					.smart_schedule_title
						Button(type="default").smart_schedule_titleBack 返回周课表
						Button(type="primary")
							Icon(type="ios-arrow-back")
							| 本周课表
							Icon(type="ios-arrow-forward")
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
					Daytable
				.smart_schedule_week
					.smart_schedule_title
						Button(type="primary")
							Icon(type="ios-arrow-back")
							| 本周课表
							Icon(type="ios-arrow-forward")
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
					Weektable
			TabPane(label="我的定制课表", name="name2").infor_smart_tabPane
				.smart_schedule_day
					.smart_schedule_title
						Button(type="default").smart_schedule_titleBack 返回周课表
						Button(type="primary")
							Icon(type="ios-arrow-back")
							| 本周课表
							Icon(type="ios-arrow-forward")
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
					Daytable
				.smart_schedule_week
					.smart_schedule_title
						Button(type="primary")
							Icon(type="ios-arrow-back")
							| 本周课表
							Icon(type="ios-arrow-forward")
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
					Weektable
			TabPane(label="收藏的学校", name="name3").infor_smart_tabPane
				Table(border ,:columns="tableConfig", :data="schoolList")
				Page.smart_tabs_page(:total="100",show-total)

</template>
<script>
import Daytable from "../../components/Daytable";
import Weektable from "../../components/Weektable";
export default {
  data() {
    return {
      tableConfig: [
        {
          title: "学校",
          key: "name",
        },
        {
          title: "所属区域",
          key: "age"
        },
        {
          title: "学段",
          key: "address"
		},
		{
          title: "周课程数量",
		  key: "age",
		  sortable: true
        },
        {
          title: "关注度",
		  key: "address",
		  sortable: true
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "10px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "查看课表"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "取消收藏"
              )
            ]);
          }
        }
	  ],
	  schoolList:[],
    };
  },
  components: {
    Daytable,
    Weektable
  }
};
</script>
