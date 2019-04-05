<style lang="scss">
.weekSh{
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
		&_scheduleTitle{
			text-indent: 16px;
			flex-grow: 1;
			text-align:left;
		}
	}
}	
</style>

<template lang="pug">
.weekSh
	nav.weekSh_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem(to="/components/breadcrumb") 智能课表
			BreadcrumbItem 智能课表
	header.weekSh_header
		.weekSh_header_content
			h2.weekSh_header_title 杭州绿城育华中学
			img(src="../../assets/ic_hot_gray.png").weekSh_header_icon
			span.weekSh_header_number 655648
		Button(type="primary").weekSh_header_collect 加到我的课表	
	content.weekSh_content
		.weekSh_content_title
			Button(type="primary")
				Icon(type="ios-arrow-back")
				| 本周课表
				Icon(type="ios-arrow-forward")
			h3.weekSh_content_scheduleTitle  3月13日-19日课表
		Daytable.weekSh_content_schedule(:isHome="false")
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
