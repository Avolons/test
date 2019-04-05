<style lang="scss">
.home{
	background: #f6f5f5;
	&_header{
		background: #fff;
		&_top{
			width: 1200px;
			margin: 0 auto;
			display: flex;
			height: 56px;
			align-items: center;
		}
		&_topImg{
			display: flex;
		}
		&_topList{
			height: 100%;
			align-items: center;
			display: flex;
			justify-content: flex-start;
			flex-grow: 1;
		}
		&_topSingle{
			margin-left: 60px;
			cursor: pointer;
		}
		&_topTools{
			height: 100%;
			align-items: center;
			display: flex;
			justify-content: flex-start;
		}
		&_topToolsSingle{
			margin-left: 33px;
		}
		&_bottom{
			height: 180px;
			background: url('../../assets/banner.png');
			background-size: cover;
		}
		&_bottomBox{
			width: 1200px;
			margin: 0 auto;
			position: relative;
		}
		&_bottomTitle{
			font-size: 32px;
			color: #FFFFFF;
			text-align: center;
			margin: 0;
			margin-bottom: 50px;
			padding-top: 48px;
		}
		&_bottomAside{
			position: absolute;
			right: 0;
			top: 63px;
		}
		&_bottomMenulist{
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		&_bottomMenu{
			margin-right: 60px;
			font-size: 16px;
			color: #FFFFFF;	
			opacity: 0.8;
			&--click{
				opacity: 1;
			}
		}
	}	
	&_content{
		display: flex;
		flex-wrap: wrap;
		width: 1200px;
		margin: 0 auto;
		margin-top: 17px;
		&_commonTitle{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 18px;
			height: 32px;
		}
		&_commonTag{
			font-size: 18px;
			color: rgba(0,0,0,0.90);
		}
		&_commonMore{
			display: flex;
			font-size: 14px;
			color: rgba(0,0,0,0.60);
			align-items: center;
			>img{
				height: 10px;
			}
		}
		&_schedule{
			width: 896px;
			margin-right: 17px;
			box-sizing: border-box;
			padding: 25px;
			padding-top: 17px;
			background-color: #fff; 
			&_header{
				height: 66px;;
				display: flex;
				align-items: center;
			}
			&_title{
				flex-grow: 1;
			}        
		}
		// 热点学校相关
		&_hotSchool{
			width: 286px;
			height: 747px;
			background: #fff;
			padding: 12px 23px 31px;
			box-sizing: border-box;
		}
		&_hotSchoolSingle{
			height: 48px;
			margin-bottom: 19px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&_hotSchoolAvator{
			display: block;
			width: 48px;
			height: 48px;
		}
		&_hotSchoolContent{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			width: 176px;
		}
		&_hotSchoolName{
			font-size: 14px;
			width: 100%;
			height: 21px;
			color: rgba(0,0,0,0.90);
			line-height: 21px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			margin-bottom: 6px;
		}
		&_hotSchoolIcon{
			display: inline-block;
			margin-right: 5px;
		}
		&_hotSchoolNumber{
			font-size: 14px;
			color: rgba(0,0,0,0.30);	
		}
		&_todayLive{
			margin-top: 22px;
			width: 100%;
		}
		&_hotClass{
			margin-top: 22px;
			width: 100%;
		}
		&_commonClassList{
			display: flex;
			justify-content: space-between;
		}
		&_commonClassSingle{
			width: 227px;
			height: 218px;
			background: #fff;
		}
		&_commonClassImg{
			height: 128px;
			display: block;
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
					img(src="../../assets/ic_wechat.png").home_header_topToolsIcon
				li.home_header_topToolsSingle
					img(src="../../assets/ic_phone.png").home_header_topToolsIcon
				li.home_header_topToolsSingle
					.home_header_topToolsLogin 登录
		.home_header_bottom
			.home_header_bottomBox
				h1.home_header_bottomTitle 城乡携手   同步课堂
				aside.home_header_bottomAside
					img(src="../../assets/ic_time.png").home_header_bottomAsideIcon 
				ul.home_header_bottomMenulist
					li.home_header_bottomMenu 专栏首页
					li.home_header_bottomMenu 智能课表
					li.home_header_bottomMenu 条件搜索
					li.home_header_bottomMenu 资源分享
					li.home_header_bottomMenu 课表管理
					li.home_header_bottomMenu 服务信息
				.home_header_bottomSerch
	content.home_content
		.home_content_schedule
			.home_content_schedule_header
				Button(type="primary")
					Icon(type="ios-arrow-back")
					| 本周课表
					Icon(type="ios-arrow-back")
				h3.home_content_schedule_title  3月13日-19日课表
				Dropdown
					Button(type="primary") 下拉菜单
						Icon(type="ios-arrow-down")
					DropdownMenu(slot="list")
						DropdownItem 驴打滚
				Dropdown
					Button(type="primary") 下拉菜单
						Icon(type="ios-arrow-down")
					DropdownMenu(slot="list")
						DropdownItem 驴打滚
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
			ul.home_content_commonClassList
				li.home_content_commonClassSingle
					img.home_content_commonClassImg
					h3.home_content_commonTitle
					p.home_content_commonSchool
		.home_content_hotClass
			.home_content_commonTitle
				h2.home_content_commonTag 热点课/活动
				.home_content_commonMore 查看更多
			ul.home_content_commonClassList
				li.home_content_commonClassSingle
					img.home_content_commonClassImg
					h3.home_content_commonTitle
					p.home_content_commonSchool
		 	
</template>

<script>
import Daytable from "../../components/Daytable";
export default {
	data(){
		return{

		}
	},
	components:{
		Daytable
	},
	methods:{

	},
}
</script>
