<style lang="scss">
.infor {
  &_nav {
    text-align: left;
    height: 50px;
    align-items: center;
    display: flex;
  }
  &_header {
    background: #fff;
    height: 344px;
    box-sizing: border-box;
    padding: 30px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_img {
      width: 498px;
      height: 100%;
    }
    &_content {
      flex-grow: 1;
      height: 100%;
      margin-left: 26px;
    }
    &_title {
      font-weight: 700;
      font-size: 24px;
      color: rgba(0, 0, 0, 0.9);
      letter-spacing: 2px;
      text-align: left;
      line-height: 31px;
      margin-bottom: 15px;
    }
    &_msg {
      display: flex;
      justify-content: flex-start;
      align-items: center;
	  height: 19px;
	  margin-bottom: 21px;
    }
    &_msgImg {
      height: 16px;
      margin-right: 3px;
    }
    &_msgNumber {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.9);
      letter-spacing: 0;
      text-align: left;
      line-height: 19px;
      margin-right: 38px;
    }
    &_description {
      margin-bottom: 21px;
      height: 19px;
      display: flex;
    }
    &_name {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.9);
      letter-spacing: 0;
      width: 88px;
      text-align: left;
      line-height: 19px;
    }
    &_text {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      letter-spacing: 0;
      text-align: left;
      line-height: 19px;
      &--noAccess {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.3);
        letter-spacing: 0;
        text-align: left;
        line-height: 19px;
      }
	}
	&_btnList{

	}
	&_comments{
		margin-right: 26px;
	}
  }
  &_content{
	  background: #fff;
	  &_tabPane{
		  box-sizing: border-box;
		  padding: 30px;
	  }
  }
}
</style>

<template lang="pug">
	.infor
		.infor_nav
			Breadcrumb
				BreadcrumbItem(to="/") 专栏首页
				BreadcrumbItem(to="/") 今日直播
				BreadcrumbItem 课程详情	
		.infor_header
			.infor_header_img
			.infor_header_content
				.h3.infor_header_title 小学2年级国语课堂
				.infor_header_msg
					img(src="../../assets/ic_hot_blue.png").infor_header_msgImg 
					span.infor_header_msgNumber 37
					img(src="../../assets/ic_eye_blue.png").infor_header_msgImg
					span.infor_header_msgNumber 1.3w
					img(src="../../assets/ic_download_blue.png").infor_header_msgImg
					span.infor_header_msgNumber 17w
					img(src="../../assets/ic_star_blue.png").infor_header_msgImg
					span.infor_header_msgNumber 2777优秀
				.infor_header_description
					.infor_header_name 时间：
					.infor_header_text 2019年3月23日 周三 12:00～14:20
				.infor_header_description
					.infor_header_name 学校/教师：
					.infor_header_text 杭州绿城育华中学 朱一龙
				.infor_header_description
					.infor_header_name 直播地址：
					.infor_header_text--noAccess 暂无查看权限
				.infor_header_description
					.infor_header_name 回看地址：
					.infor_header_text--noAccess 暂无查看权限
				.infor_header_btnList
					Button(type="primary").infor_header_comments 去留言
					Button.infor_header_evaluate 去评价
		.infor_content
			Tabs(value="name1")
				TabPane(label="课程信息", name="name1").infor_content_tabPane
					.infor_header_description
						.infor_header_name 课程名称：
						.infor_header_text 2019年3月23日 周三 12:00～14:20
					.infor_header_description
						.infor_header_name 时间：
						.infor_header_text 2019年3月23日 周三 12:00～14:20
					.infor_header_description
						.infor_header_name 学校/教师：
						.infor_header_text 杭州绿城育华中学 朱一龙
					.infor_header_description
						.infor_header_name 地址：
						.infor_header_text 直播地址：
							span.infor_header_text--noAccess 暂无查看权限
					.infor_header_description
						.infor_header_name 
						.infor_header_text 回看地址：
							span.infor_header_text--noAccess 暂无查看权限
					.infor_header_description
						.infor_header_name 课程类型：
						.infor_header_text 同步教研
					.infor_header_description
						.infor_header_name 学段学科：
						.infor_header_text 小学；二年级；语文
					.infor_header_description
						.infor_header_name 教材信息：
						.infor_header_text 新东方英语七下；Unit2；SectionB
					.infor_header_description
						.infor_header_name 简介：
						.infor_header_text 希望课程观看愉快！
				TabPane(label="留言（20条）", name="name2")
				TabPane(label="评价（53人）", name="name3")
</template>
