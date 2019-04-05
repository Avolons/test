<style lang="scss">
.daySh{
	&_nav{
		text-align: left;
		height: 50px;;
		align-items: center;
		display: flex;
	}
	&_header{
		height: 114px;
		position: relative;
		background: #fff;
		box-sizing: border-box;
		padding-top: 34px;
		border-bottom: 1px solid #e7e7e7;
		&_content{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		&_title{
			width: 100%;
			margin-bottom: 9px;
			font-size: 24px;
			color: rgba(0,0,0,0.90);
			text-align: center;
		}
		&_icon{
			flex-shrink: 0;
			margin-right: 5px;
			height: 14px;
			width: 14px;
		}
		&_number{
			font-size: 14px;
			color: rgba(0,0,0,0.60);
		}
		&_collect{
			position: absolute;
			top: 32px;
			right: 32px;
		}
	}
	&_content{
		background: #fff;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 30px;
		padding-top: 0;
		&_title{
			width: 100%;
			height: 66px;;
			display: flex;
			align-items: center;
		}
		&_titleBack{
			margin-right: 16px;
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
.daySh
	nav.daySh_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem(to="/components/breadcrumb") 智能课表
			BreadcrumbItem 智能课表
	header.daySh_header
		.daySh_header_content
			h2.daySh_header_title 杭州绿城育华中学
			img(src="../../assets/ic_hot_gray.png").daySh_header_icon
			span.daySh_header_number 655648
		Button(type="primary").daySh_header_collect 加到我的课表	
	content.daySh_content
		.daySh_content_title
			Button(type="default").daySh_content_titleBack 返回周课表
			Button(type="primary")
				Icon(type="ios-arrow-back")
				| 本周课表
				Icon(type="ios-arrow-forward")
			h3.daySh_content_scheduleTitle  3月13日-19日课表
		Daytable.daySh_content_schedule(:isHome="false")
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
</script>
