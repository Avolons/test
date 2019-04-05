<style lang="scss">
.hot {
  &_nav {
    text-align: left;
    height: 50px;
    align-items: center;
    display: flex;
  }
  &_content {
    box-sizing: border-box;
    padding: 33px;
    background: #fff;
    display: block;
  }
  &_header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    &_title {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.9);
    }
    &_search {
      width: 360px;
    }
  }
  &_choose {
    margin-top: 30px;
    background: #f3f4f5;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_chooseLeft {
    flex-grow: 1;
  }
  &_chooseRight {
    display: flex;
  }
  &_page {
    margin-top: 40px;
    text-align: center;
  }
  &_single {
    padding: 33px 0;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    align-items: center;
    &_content {
      flex-grow: 1;
    }
    &_img {
      display: block;
      width: 320px;
      height: 180px;
      margin-right: 32px;
    }
    &_title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.9);
      margin-bottom: 20px;
    }
    &_msg {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgba(0, 0, 0, 0.6);
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
    &_focus {
      width: 115px;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      padding-right: 20px;
    }
    &_icon {
      width: 17px;
      height: 20px;
    }
    &_number {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 700;
    }
  }
}
</style>

<template lang="pug">
.hot
	nav.hot_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem 热点课/活动
	.hot_content
		header.hot_header
			h2.hot_header_title 热点课/活动
			Input.hot_header_search(search, enter-button="搜索", placeholder="输入学校/教师/课名搜索")
		section.hot_choose
			.hot_chooseLeft
				Dropdown
					Button() 学段
						Icon(type="ios-arrow-down")
					DropdownMenu(slot="list")
						DropdownItem 驴打滚
				Dropdown
					Button() 年级
						Icon(type="ios-arrow-down")
					DropdownMenu(slot="list")
						DropdownItem 驴打滚	
				Dropdown
					Button() 学科
						Icon(type="ios-arrow-down")
					DropdownMenu(slot="list")
						DropdownItem 驴打滚
				Dropdown
					Button() 课程类型
						Icon(type="ios-arrow-down")
					DropdownMenu(slot="list")
						DropdownItem 驴打滚	
			.hot_chooseRight
				.ivu-table-cell
					span.ivu-table-cell-sort 时间排序
						span.ivu-table-sort
							i.ivu-icon.ivu-icon-md-arrow-dropup
							i.ivu-icon.ivu-icon-md-arrow-dropdown
				.ivu-table-cell
					span.ivu-table-cell-sort 关注度
						span.ivu-table-sort
							i.ivu-icon.ivu-icon-md-arrow-dropup
							i.ivu-icon.ivu-icon-md-arrow-dropdown
		ul.hot_list
			li.hot_single
				img(src="").hot_single_img
				.hot_single_content
					h3.hot_single_title 三年级下册《除数是一位数的除法》
					h4.hot_single_msg  3月15日  周二  14:00～16:00
					h4.hot_single_msg  金华市环城小学教育集团  朱一龙
					h4.hot_single_msg  同步教研
					h4.hot_single_msg  小学；五年级；数学
				.hot_single_focus
					img(src="../../assets/ic_hot_blue.png").hot_single_icon
					span.hot_single_number 36002
			Page.hot_page(:total="100",show-total)
</template>
