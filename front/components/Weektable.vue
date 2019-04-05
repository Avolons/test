<style lang="scss">
$borderColor: #e7e7e7;
.weekTable{
    text-align: center;
	width: 1137px;
	margin:  0 auto;
	border: 1px solid   $borderColor;
	border-bottom: none;
	&_header{
		font-size: 14px;
		color: rgba(0, 0, 0, 0.6);
		border-bottom: 1px solid   $borderColor;
		display: flex;
		height: 56px;
		background-color: #f3f4f5;
		line-height: 56px;
		&_classTime{
			width: 115px;
			box-sizing: border-box;
		}
		&_className{
			width: 290px;
		}
		&_school{
			width: 190px;
		}
		&_teacher{
			width: 110px;
		}
		&_classType{
			width: 150px;
		}
		&_beginTime{
			width: 145px;
		}
		&_focus{
			width: 137px;
		}
	}
	&_content{
		&_part{
			display: flex;
		}
		&_left{
			width: 66px;
			background-color: #f3f4f5;
			display: flex;
			align-items: center;
			justify-content: center;
			border-right: 1px solid   $borderColor;
			border-bottom: 1px solid   $borderColor;
			box-sizing: border-box;
		}
		&_right{
			flex-grow: 1;
		}
		&_param{
			display: flex;	
			&--double{
				background-color: #f2f4f7;
			}
		}
		&_titleTime{
			width: 46px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid   $borderColor;
			border-right: 1px solid   $borderColor;
		}
		&_list{
			flex-grow: 1;
		}
		&_single{
			font-size: 14px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.9);
			border-bottom: 1px solid   $borderColor;
			display: flex;
			>div{
				padding: 23px;
				box-sizing: border-box;
				overflow: hidden;
				white-space: pre;
				text-overflow: ellipsis;
			}
			
		}
	}
}
</style>

<template lang="pug">
	.weekTable
		.weekTable_header
			.weekTable_header_classTime 课时
			.weekTable_header_className 课名
			.weekTable_header_school 学校
			.weekTable_header_teacher 老师
			.weekTable_header_classType 课程类型
			.weekTable_header_beginTime  开始时间
			.weekTable_header_focus 关注度
		.weekTable_content
			.weekTable_content_part
				.weekTable_content_left 上午
				.weekTable_content_right
					.weekTable_content_param(v-for="(item,index) in tableData.am",:key="index",:class="{'weekTable_content_param--double':index%2!==0}")
						.weekTable_content_titleTime {{index+1}}
						.weekTable_content_list
							.weekTable_content_single(v-for="(ite,inde) in item",:key="inde")
								.weekTable_header_className {{ite.className}}
								.weekTable_header_school {{ite.school}}
								.weekTable_header_teacher {{ite.teacher}}
								.weekTable_header_classType {{ite.classType}}
								.weekTable_header_beginTime  {{ite.beginTime}}
								.weekTable_header_focus {{ite.focus}}
			.weekTable_content_part
				.weekTable_content_left 下午
				.weekTable_content_right
					.weekTable_content_param(v-for="(item,index) in tableData.pm",:key="index",:class="{'weekTable_content_param--double':index%2!==0}")
						.weekTable_content_titleTime {{index+1}}
						.weekTable_content_list
							.weekTable_content_single(v-for="(ite,inde) in item",:key="inde")
								.weekTable_header_className {{ite.className}}
								.weekTable_header_school {{ite.school}}
								.weekTable_header_teacher {{ite.teacher}}
								.weekTable_header_classType {{ite.classType}}
								.weekTable_header_beginTime  {{ite.beginTime}}
								.weekTable_header_focus {{ite.focus}}
</template>

<script>
export default {
	data(){
		return{
			tableData:{
				am:[
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					},
					{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}
					],
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}],
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}],
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}],
				],
				pm:[
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}],
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}],
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}],
					[{
						className:"初中科学初中科学课堂化学类实案例…",
						school:"初中科学初中科学课堂化学类实案例…",
						teacher:"朱一龙",
						classType:"同步教研",
						beginTime:"8:00～9:00",
						focus:"120",
					}],
				]
			}
		}
	}
}
</script>
