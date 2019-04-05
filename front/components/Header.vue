<style lang="scss">
.component_header{
	width: 100%;
	height: 64px;
	background-color: #2274c3;
	&_content{
		width: 1200px;
		margin: 0 auto;
		display: flex;
		height: 100%;
		align-items: center;
	}
	&_icon{
		flex-shrink: 0;
		display: block;
		margin-right: 34px;
	}
	&_nav{
		flex-grow: 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
	}
	&_navSingle{
		color: rgba(255, 255, 255, 0.8);
		font-size: 16px;
		cursor: pointer;
		margin-right: 50px;
		&--select{
			color: #fff;
		}
	}
	&_tools{
		height: 100%;
		align-items: center;
		display: flex;
		justify-content: flex-start;
	}
	&_toolsSingle{
		margin-left: 34px;
		color: #fff;
		font-size: 16px;
	}
}
</style>

<template lang="pug">
	.component_header
		.component_header_content
			img.component_header_icon(src="../assets/logo_blue.png")
			ul.component_header_nav
				li.component_header_navSingle 首页
				li.component_header_navSingle 专栏首页
				li.component_header_navSingle 智能课表
				li.component_header_navSingle 条件搜索
				li.component_header_navSingle  资源分享 
				li.component_header_navSingle  课表管理
				li.component_header_navSingle  服务信息
			ul.component_header_tools
				li.component_header_toolsSingle
					img(src="../assets/ic_search_white.png").component_header_toolsIcon 
				li.component_header_toolsSingle
					img(src="../assets/ic_wechat_white.png").component_header_toolsIcon 
				li.component_header_toolsSingle
					img(src="../assets/ic_phone_white.png").component_header_toolsIcon 
				li.component_header_toolsSingle  登录

</template>        

<script>
export default {
	data(){
		return{

		}
	}
}
</script>
