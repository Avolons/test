<style lang="scss">
@import "../../style/index.scss";
.home {
  background: #f6f5f5;
  &_header {
    background: #fff;
    &_top {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      height: 56px;
      align-items: center;
    }
    &_topImg {
      display: flex;
    }
    &_topList {
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: flex-start;
      flex-grow: 1;
    }
    &_topSingle {
      margin-left: 60px;
      cursor: pointer;
    }
    &_topTools {
      height: 100%;
      align-items: center;
      display: flex;
      justify-content: flex-start;
    }
    &_topToolsSingle {
      margin-left: 33px;
    }
    &_bottom {
      height: 180px;
      background: url("../../assets/banner.png");
      background-size: cover;
    }
    &_bottomBox {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &_bottomTitle {
      font-size: 32px;
      color: #ffffff;
      text-align: center;
      margin: 0;
      line-height: 42px;
      width: 100%;
      margin-bottom: 50px;
      padding-top: 48px;
    }
    &_bottomAside {
      position: absolute;
      right: 0;
      top: 63px;
      display: flex;
      font-size: 16px;
      align-items: center;
      color: #ffffff;
    }
    &_bottomAsideIcon {
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }
    &_bottomMenulist {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    &_bottomMenu {
      margin-right: 60px;
      font-size: 16px;
      line-height: 21px;
      color: #ffffff;
      opacity: 0.8;
      cursor: pointer;
      &--click {
        opacity: 1;
      }
    }
    &_bottomSerch {
      width: 320px;
      height: 32px;
    }
  }
  &_content {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    margin-top: 17px;
    &_commonTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      height: 32px;
    }
    &_commonTag {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.9);
    }
    &_commonMore {
      display: flex;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      align-items: center;
      cursor: pointer;
      &:hover {
        color: $mainColor;
      }
      > img {
        height: 10px;
      }
    }
    &_schedule {
      width: 896px;
      height: 747px;
      overflow: hidden;
      margin-right: 17px;
      box-sizing: border-box;
      padding: 25px;
      padding-top: 17px;
      background-color: #fff;
      &_header {
        height: 66px;
        display: flex;
        align-items: center;
      }
      &_title {
        flex-grow: 1;
        text-align: center;
        font-size: 18px;
        color: $mainColor;
        line-height: 32px;
      }
    }
    // 热点学校相关
    &_hotSchool {
      width: 286px;
      height: 747px;
      background: #fff;
      padding: 12px 23px 31px;
      box-sizing: border-box;
    }
    &_hotSchoolSingle {
      height: 48px;
      margin-bottom: 19px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &_hotSchoolAvator {
      display: block;
      width: 48px;
      height: 48px;
    }
    &_hotSchoolContent {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 176px;
    }
    &_hotSchoolName {
      font-size: 14px;
      width: 100%;
      height: 21px;
      color: rgba(0, 0, 0, 0.9);
      line-height: 21px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 6px;
    }
    &_hotSchoolIcon {
      display: inline-block;
      margin-right: 5px;
    }
    &_hotSchoolNumber {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.3);
    }
    &_todayLive {
      margin-top: 22px;
      width: 100%;
    }
    &_hotClass {
      margin-top: 22px;
      width: 100%;
    }
    &_commonClassList {
      display: flex;
      justify-content: space-between;
    }
    &_commonClassSingle {
      width: 227px;
      height: 218px;
      background: #fff;
    }
    &_commonClassImg {
      height: 128px;
      display: block;
      width: 100%;
    }
    &_commonName {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.9);
      text-align: justify;
      line-height: 21px;
      box-sizing: border-box;
      padding: 0 16px;
      margin-top: 8px;
      overflow: hidden;
      max-height: 42px;
    }
    &_commonSchool {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      text-align: justify;
      line-height: 18px;
      box-sizing: border-box;
      padding: 0 16px;
      margin-top: 9px;
    }
  }
}
</style>

<template lang="pug">
.home
	header.home_header
		.home_header_top
			img(src="../../assets/logo_white.png").home_header_topImg
			ul.home_header_topList
				li.home_header_topSingle 首页
				li.home_header_topSingle 资源
				li.home_header_topSingle 应用
				li.home_header_topSingle 社区
				li.home_header_topSingle 空间
			ul.home_header_topTools
				li.home_header_topToolsSingle
					Poptip(placement="bottom", width="400")
						img(src="../../assets/ic_wechat.png").home_header_topToolsIcon
						img(src="../../assets/ic_wechat.png",slot="content").home_header_topToolsContent
				li.home_header_topToolsSingle
					Poptip(placement="bottom", width="400")
						img(src="../../assets/ic_phone.png").home_header_topToolsIcon
						img(src="../../assets/ic_wechat.png",slot="content").home_header_topToolsContent
				li.home_header_topToolsSingle
					.home_header_topToolsLogin 登录
		.home_header_bottom
			.home_header_bottomBox
				h1.home_header_bottomTitle 城乡携手   同步课堂
				aside.home_header_bottomAside
					img(src="../../assets/ic_time.png").home_header_bottomAsideIcon 
					| 2019-3-4 周一
				ul.home_header_bottomMenulist
					li.home_header_bottomMenu 专栏首页
					li.home_header_bottomMenu 智能课表
					li.home_header_bottomMenu 条件搜索
					li.home_header_bottomMenu 资源分享
					li.home_header_bottomMenu 课表管理
					li.home_header_bottomMenu 服务信息
				.home_header_bottomSerch
					Input(search, enter-button, placeholder="输入关键字搜索")
	content.home_content
		.home_content_schedule
			.home_content_schedule_header
				.common_timeSelect
					Icon(type="ios-arrow-back").common_timeSelect_icon
					span.common_timeSelect_btn 本周课表
					Icon(type="ios-arrow-forward").common_timeSelect_icon
				h3.home_content_schedule_title  3月13日-19日课表
				Select(v-model="model1").common_dropdown
					Option(v-for="item in cityList", :value="item.value", :key="item.value")
				Select(v-model="model1").common_dropdown
					Option(v-for="item in cityList", :value="item.value", :key="item.value")
			Daytable(:isHome="true")
		.home_content_hotSchool
			.home_content_commonTitle
				h2.home_content_commonTag 热点学校
				.home_content_commonMore 查看更多
					img(src="../../assets/ic_arrow_r_n.png")
			ul.home_content_hotSchoolList
				li.home_content_hotSchoolSingle
					img(src="").home_content_hotSchoolAvator
					.home_content_hotSchoolContent
						h4.home_content_hotSchoolName 绍兴市上虞区城北实验中学
						img(src="../../assets/ic_hot_gray.png").home_content_hotSchoolIcon
						span.home_content_hotSchoolNumber 49835
				li.home_content_hotSchoolSingle
				li.home_content_hotSchoolSingle
				li.home_content_hotSchoolSingle
		.home_content_todayLive
			.home_content_commonTitle
				h2.home_content_commonTag 今日直播
				.home_content_commonMore 查看更多
					img(src="../../assets/ic_arrow_r_n.png")
			ul.home_content_commonClassList
				li.home_content_commonClassSingle
					img.home_content_commonClassImg
					h3.home_content_commonName  三年级下册《除数是一位数的除法》
					p.home_content_commonSchool 金华市环城小学教育集团
		.home_content_hotClass
			.home_content_commonTitle
				h2.home_content_commonTag 热点课/活动
				.home_content_commonMore 查看更多
					img(src="../../assets/ic_arrow_r_n.png")
			ul.home_content_commonClassList
				li.home_content_commonClassSingle
					img.home_content_commonClassImg
					h3.home_content_commonName 三年级下册《除数是一位数的除法》
					p.home_content_commonSchool 金华市环城小学教育集团
		 	
</template>

<script>
import Daytable from "../../components/Daytable";
export default {
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ]
    };
  },
  components: {
    Daytable
  },
  methods: {}
};
</script>
