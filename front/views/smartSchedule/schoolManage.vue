<style lang="scss">
.school {
  &_nav {
    text-align: left;
    height: 50px;
    align-items: center;
    display: flex;
  }
  &_content {
    box-sizing: border-box;
    padding: 30px;
    background: #fff;
    &_box {
      &:first-child {
        border-bottom: 1px solid #e7e7e7;
      }
      display: flex;
      margin-bottom: 30px;
    }
    &_title {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.9);
      text-align: right;
      line-height: 22px;
      width: 160px;
      margin-right: 17px;
      flex-shrink: 0;
    }
    &_list {
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
    }
    &_single {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      text-align: justify;
      line-height: 21px;
      width: 50%;
      margin-bottom: 40px;
    }
    &_haveSingle {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      text-align: justify;
      line-height: 21px;
      width: 50%;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
    }
    &_text {
      flex-grow: 0;
      width: 60%;
    }
    &_remove {
      font-size: 14px;
      color: #2274c3;
      text-align: justify;
      line-height: 17px;
      width: 30px;
      cursor: pointer;
    }
    &_add {
      width: 100%;
    }
  }
}
</style>

<template lang="pug">
.school
	.school_nav
		Breadcrumb
			BreadcrumbItem(to="/") 专栏首页
			BreadcrumbItem(to="/components/breadcrumb") 热点学校
			BreadcrumbItem 杭州绿城育华中学
	.school_content
		.school_content_box
			.school_content_title 结对学校：
			.school_content_list
				.school_content_single 绍兴市上虞区城北实验中学绍兴市上虞
				.school_content_single 绍兴市上虞区城北实验中学绍兴市上虞
				.school_content_single 绍兴市上虞区城北实验中学绍兴市上虞
				.school_content_single 绍兴市上虞区城北实验中学绍兴市上虞
		.school_content_box
			.school_content_title 已定制学校：
			.school_content_list
				.school_content_haveSingle 
					.school_content_text 绍兴市上虞区城北实验中学绍兴市上虞
					.school_content_remove 移除
				.school_content_haveSingle 
					.school_content_text 绍兴市上虞区城北实验中学绍兴市上虞
					.school_content_remove 移除
				.school_content_haveSingle 
					.school_content_text 绍兴市上虞区城北实验中学绍兴市上虞
					.school_content_remove 移除
				.school_content_add
					Button(type="primary") 添加学校
</template>
