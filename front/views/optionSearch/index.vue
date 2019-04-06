<style lang="scss">

</style>

<template lang="pug">
.search
	.search_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem(to="/components/breadcrumb") 热点学校
			BreadcrumbItem 杭州绿城育华中学
	.search_header
		ul.search_header_list
			li.search_header_single
				.search_header_title 选择区域
				al-cascader(v-model="res_s",level="2")
			li.search_header_single
				.search_header_title 选择学段/学科
				Input(v-model="value", placeholder="Enter something...")
			li.search_header_single
				.search_header_title
				Input(v-model="value", placeholder="Enter something...")
			li.search_header_single
				.search_header_title 搜索关键字
				.search_header_collect
					Select(v-model="model1",placeholder="全部学段")
						Option(v-for="item in cityList", :value="item.value", :key="item.value")
					Select(v-model="model1",placeholder="全部年级")
						Option(v-for="item in cityList", :value="item.value", :key="item.value")
					Select(v-model="model1",placeholder="全部学科")
						Option(v-for="item in cityList", :value="item.value", :key="item.value")
		Button(type="primary") 搜索	
	.search_content
		.search_content_noData
			.search_content_noData
				img(src="../../assets/ic_empty.png").search_content_noDataImg
				h3.search_content_noDataTexrt 没有找到符合条件的学校换个条件试试吧～～
		.search_content_title
			.common_timeSelect
				Icon(type="ios-arrow-back").common_timeSelect_icon
				span.common_timeSelect_btn 本周课表
				Icon(type="ios-arrow-forward").common_timeSelect_icon
			h3.search_content_scheduleTitle  3月13日-19日课表
		Table(border ,:columns="tableConfig", :data="schoolList")
		Page.smart_tabs_page(:total="100",show-total)
</template>
<script>
export default {
    data(){
		return{
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
		}
	}
}
</script>
