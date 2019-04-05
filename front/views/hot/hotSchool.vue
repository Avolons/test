<style lang="scss">
.hotSchool {
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
    justify-content: flex-start;
    align-items: center;
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
      height: 58px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    &_img {
      display: block;
      width: 88px;
      height: 88px;
      margin-right: 25px;
      border-radius: 50%;
    }
    &_title {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.9);
      text-align: justify;
      line-height: 21px;
      margin-bottom: 18px;
    }
    &_msg {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      text-align: left;
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }
    &_btnList {
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
    }
    &_btn {
      &:first-child {
        margin-right: 25px;
      }
    }
  }
}
</style>

<template lang="pug">
.hotSchool
	nav.hotSchool_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem 热点学校
	.hotSchool_content
		header.hotSchool_header
			h2.hotSchool_header_title 热点学校
			Input.hotSchool_header_search(search, enter-button="搜索", placeholder="输入学校/教师/课名搜索")
		section.hotSchool_choose
			.ivu-table-cell
				span.ivu-table-cell-sort 周课程数量
					span.ivu-table-sort
						i.ivu-icon.ivu-icon-md-arrow-dropup
						i.ivu-icon.ivu-icon-md-arrow-dropdown
			.ivu-table-cell
				span.ivu-table-cell-sort 关注度
					span.ivu-table-sort
						i.ivu-icon.ivu-icon-md-arrow-dropup
						i.ivu-icon.ivu-icon-md-arrow-dropdown
		ul.hotSchool_list
			li.hotSchool_single
				img(src="").hotSchool_single_img
				.hotSchool_single_content
					h3.hotSchool_single_title 绍兴市上虞区城北实验中学
					h4.hotSchool_single_msg  所属区域：浙江省  杭州市  西湖区
					h4.hotSchool_single_msg  学段：小学  初中
					h4.hotSchool_single_msg  本周课程数：30
					h4.hotSchool_single_msg  关注度：406
				.hotSchool_single_btnList
					Button(type="primary").hotSchool_single_btn  查看课表
					Button(type="primary").hotSchool_single_btn  收藏
			Page.hotSchool_page(:total="100",show-total)
</template>
