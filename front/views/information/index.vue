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
    &_btnList {
    }
    &_comments {
      margin-right: 26px;
    }
  }
  &_content {
    background: #fff;
    &_tabPane {
      box-sizing: border-box;
      padding: 30px;
    }
    &_noData {
    }
    &_noDataImg {
      margin: 100px auto 16px;
      display: block;
    }
    &_noDataTexrt {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.3);
      text-align: center;
    }
    &_comments {
      box-sizing: border-box;
      padding: 30px;
      &_single {
        border-bottom: 1px solid #e7e7e7;
        padding: 10px 0;
        display: flex;
        flex-wrap: wrap;
      }
      &_name {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.3);
        letter-spacing: 0;
        text-align: left;
        line-height: 19px;
        width: 100%;
      }
      &_text {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.9);
        letter-spacing: 0;
        text-align: left;
        line-height: 30px;
        width: 100%;
      }
      &_back {
        background: #f8f8f8;
        border-radius: 2px;
        width: 1112px;
        margin-left: 24px;
        box-sizing: border-box;
        padding: 10px;
      }
    }
    &_evaluate {
      box-sizing: border-box;
	  padding: 30px;
	  &_single {
      padding: 13px 0;
      border-bottom: 1px solid #e7e7e7;
    }
      &_name {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.3);
        letter-spacing: 0;
        text-align: left;
        line-height: 19px;
      }
      &_text {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.9);
        letter-spacing: 0;
        text-align: left;
        line-height: 30px;
      }
    }
    &_starList {
      background: #f8f8f8;
      border-radius: 2px;
      height: 54px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 20px;
      margin-bottom: 24px;
    }
    &_starImg {
      height: 20px;
      width: 20px;
      display: block;
      margin-right: 7px;
    }
    &_starText {
      font-size: 14px;
      margin-right: 52px;
      color: #666666;
      letter-spacing: 0;
      text-align: left;
      line-height: 19px;
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
			Tabs(value="name1").common_tabs
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
					.infor_content_noData
						img(src="../../assets/ic_empty.png").infor_content_noDataImg
						h3.infor_content_noDataTexrt 暂无留言
					ul.infor_content_comments
						li.infor_content_comments_single
							h4.infor_content_comments_name 周**  2019-3-13 12:34
							p.infor_content_comments_text 个人很喜欢朱老师的讲课风格，支持支持。
								.infor_content_comments_back 
									h4.infor_content_comments_name 发布者回复 2019-3-13 12:34
									p.infor_content_comments_text 《将进酒》是唐代诗人李贺创作的一首乐府诗。这首诗前四句写筵席之华贵丰盛；五、六句写动态的歌舞；七、八两句点明宴饮的时间；最后引用古人以反语结束。这首诗前面极写美酒佳肴欢歌妙舞，人生之享乐似乎莫过于此，结尾突然翻转，出人意料地推出死亡的意念和坟墓的枯寞冷落。在巨大的反差中，诗人强调的是生的快乐和死的悲哀。
				TabPane(label="评价（53人）", name="name3")
					.infor_content_noData
						img(src="../../assets/ic_empty.png").infor_content_noDataImg
						h3.infor_content_noDataTexrt 暂无评价
					ul.infor_content_evaluate
						.infor_content_starList
							img(src="../../assets/ic_star_red.png").infor_content_starImg
							span.infor_content_starText 优秀27人
							img(src="../../assets/ic_star_orange.png").infor_content_starImg
							span.infor_content_starText 良好2人
							img(src="../../assets/ic_star_yellow.png").infor_content_starImg
							span.infor_content_starText 一般1人
						li.infor_content_evaluate_single
							h4.infor_content_evaluates_name 周**  2019-3-13 12:34
							p.infor_content_evaluate_text 个人很喜欢朱老师的讲课风格，支持支持。
</template>
