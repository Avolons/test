<style lang="scss">
.smart{
	&_nav{
		text-align: left;
    height: 50px;
    align-items: center;
    display: flex;
	}
	&_tabs{
		box-sizing: border-box;
    padding: 30px;
	background: #fff;
	padding-top: 0;
    display: block;
	}
	&_schedule{
		&_title{
			width: 100%;
			height: 66px;;
			display: flex;
			align-items: center;
		}
		&_scheduleTitle{
			text-indent: 16px;
			flex-grow: 1;
			text-align:left;
		}
	}
}
</style>

<template lang="pug">
.smart
	.smart_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem 智能课表
	.smart_tabs
		Tabs(value="name1").common_tabs
			TabPane(label="全省课表", name="name1").infor_smart_tabPane
				.smart_schedule_day(v-if="provinceDayShow")
					.smart_schedule_title
						Button(type="default").smart_schedule_titleBack 返回周课表
						.common_timeSelect
							Icon(type="ios-arrow-back").common_timeSelect_icon
							span.common_timeSelect_btn 本周课表
							Icon(type="ios-arrow-forward").common_timeSelect_icon
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
					Daytable
				.smart_schedule_week(v-else)
					.smart_schedule_title
						.common_timeSelect
							Icon(type="ios-arrow-back").common_timeSelect_icon
							span.common_timeSelect_btn 本周课表
							Icon(type="ios-arrow-forward").common_timeSelect_icon
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
					Weektable
			TabPane(label="我的定制课表", name="name2").infor_smart_tabPane
				.smart_schedule_day(v-if="nineDayShow")
					.smart_schedule_title
						Button(type="default").smart_schedule_titleBack 返回周课表
						.common_timeSelect
							Icon(type="ios-arrow-back").common_timeSelect_icon
							span.common_timeSelect_btn 本周课表
							Icon(type="ios-arrow-forward").common_timeSelect_icon
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
						Button.smart_schedule_manage 管理我的课表
					Daytable
				.smart_schedule_week(v-else)
					.smart_schedule_title
						.common_timeSelect
							Icon(type="ios-arrow-back").common_timeSelect_icon
							span.common_timeSelect_btn 本周课表
							Icon(type="ios-arrow-forward").common_timeSelect_icon
						h3.smart_schedule_scheduleTitle  3月13日-19日课表
						Button.smart_schedule_manage 管理我的课表
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
		provinceDayShow:false,
		nineDayShow:false,
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
