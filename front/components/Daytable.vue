<style lang="scss">
$borderColor: #e7e7e7;
.dayTable{
    width: 100%;
    text-align: center;
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
			width: 117px;
			box-sizing: border-box;
            flex-grow: 0;
            flex-shrink: 0;
            border-right: 1px solid   $borderColor;
            &--home{
                width: 86px;
            }
		}
		&_week{
            flex-grow: 1;
            width: 25%;
            box-sizing: border-box;
            &:not(:last-child){
                border-right: 1px solid   $borderColor;
            }
		}
	}
	&_content{
		&_part{
			display: flex;
		}
		&_left{
			width: 67px;
			background-color: #f3f4f5;
			display: flex;
			align-items: center;
			justify-content: center;
			border-right: 1px solid   $borderColor;
			border-bottom: 1px solid   $borderColor;
			box-sizing: border-box;
            flex-grow: 0;
            flex-shrink: 0;
            &--home{
                 width: 38px;
            }
		}
		&_right{
            width: calc(100% - 117px);
			flex-grow: 1;
            flex-shrink: 1;
            &--home{
                 width: calc(100% - 86px); 
            }
		}
		&_param{
			display: flex;	
			&--double{
				background-color: #f2f4f7;
			}
		}
		&_titleTime{
			width: 50px;
			display: flex;
            box-sizing: border-box;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid   $borderColor;
			border-right: 1px solid   $borderColor;
            flex-grow: 0;
            flex-shrink: 0;
            &--home{
                width: 38px;
            }
		}
		&_list{
            width: calc(100% - 50px);
            &--home{
                width: calc(100% - 38px);
            }
			flex-grow: 1;
            flex-shrink: 1;
		}
		&_single{
			font-size: 14px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.9);
			border-bottom: 1px solid   $borderColor;
			display: flex;
		}
         &_text{
            flex-shrink: 1;
            padding: 23px;
            box-sizing: border-box;
            overflow: hidden;
            white-space: pre;
            width: 25%;
            text-overflow: ellipsis;
            &:not(:last-child){
                border-right: 1px solid   $borderColor;
            }
        }
	}
}
</style>

<template lang="pug">
	.dayTable
		.dayTable_header
			.dayTable_header_classTime(:class="{'.dayTable_header_classTime--home':isHome}") 课时
			.dayTable_header_week 周一
			.dayTable_header_week 周二
			.dayTable_header_week 周三
			.dayTable_header_week 周四
			.dayTable_header_week 周五
		.dayTable_content
			.dayTable_content_part
				.dayTable_content_left(:class="{'.dayTable_content_left--home':isHome}") 上午
				.dayTable_content_right(:class="{'.dayTable_content_right--home':isHome}")
					.dayTable_content_param(v-for="(item,index) in tableData.am",:key="index",:class="{'dayTable_content_param--double':index%2!==0}")
						.dayTable_content_titleTime(:class="{'.dayTable_content_titleTime--home':isHome}") {{index+1}}
						.dayTable_content_list(:class="{'.dayTable_content_list--home':isHome}")
							.dayTable_content_single(v-for="(ite,inde) in item",:key="inde")
								.dayTable_content_text(v-for="(it,ind) in ite",:key="ind") {{it}}
								
			.dayTable_content_part
				.dayTable_content_left(:class="{'.dayTable_content_left--home':isHome}") 下午
				.dayTable_content_right(:class="{'.dayTable_content_right--home':isHome}")
					.dayTable_content_param(v-for="(item,index) in tableData.pm",:key="index",:class="{'dayTable_content_param--double':index%2!==0}")
						.dayTable_content_titleTime(:class="{'.dayTable_content_titleTime--home':isHome}") {{index+1}}
						.dayTable_content_list(:class="{'.dayTable_content_list--home':isHome}")
							.dayTable_content_single(v-for="(ite,inde) in item",:key="inde")
								.dayTable_content_text(v-for="(it,ind) in ite",:key="ind") {{it}}
</template>

<script>
export default {
	data(){
		return{
			tableData:{
				am:[
					[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],
                    [
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],
					[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],
					],
					[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],],
					[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],],
					[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],],
				],
				pm:[
						[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],
                    [
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],
					[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],
					],
					[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],],
					[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],],
					[[
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
						"初中科学初中科学课堂化学类实案例…",
                    ],],
				]
			}
		}
    },
    props:{
        // 是否属于首页
        isHome:Boolean
    }
    
}
</script>
