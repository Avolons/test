<!--macarole@2019/3/30-->
<template>
  <div class="index">
    <!--标题-->
    <header class="header">
      <h2>课程详情<span class="status">已通过</span></h2>
      <div class="button-group">
        <Button icon="logo-facebook">关闭留言</Button>
        <Button icon="logo-facebook">删除</Button>
        <Button icon="logo-twitter">导出表格</Button>
      </div>
    </header>
    <!--数据条-->
    <ul class="desc clearfix">
      <li class="desc-item pull-left">关注度:<i>3</i></li>
      <li class="desc-item pull-left">浏览次数:<i>190</i></li>
      <li class="desc-item pull-left">下载次数:<i>23</i></li>
      <li class="desc-item pull-left" @click="goCommentList">
        留言数:<i>23</i>
      </li>
      <li class="desc-item pull-left">
        课程评价:
        <span>优秀<i>9</i></span>
        <span>良好<i>3</i></span>
        <span>一般<i>3</i></span>
      </li>
    </ul>
    <!--详情块-->
    <div class="content">
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">课程名称:</Col>
        <Col v-bind="secondColSize">小学五年级数学同步课程</Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">时间:</Col>
        <Col v-bind="secondColSize">2019年3月23日 周三 12:00～14:20</Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">封面图:</Col>
        <Col v-bind="secondColSize">
          <img
            src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1553935484&di=337a4eb6ef3e533797262f8539f7747a&src=http://pic3.40017.cn/scenery/destination/2015/04/18/03/vrn29Y.jpg"
            alt=""
          />
        </Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">地址:</Col>
        <Col v-bind="secondColSize">
          <p>
            直播地址<a href="http://www.baidu.com" target="_blank"
              >http://www.baidu.com</a
            >
          </p>
          <p>
            直播地址<a href="http://www.baidu.com" target="_blank"
              >http://www.baidu.com</a
            >
          </p>
        </Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">课程类型:</Col>
        <Col v-bind="secondColSize">同步教研</Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">学段学科:</Col>
        <Col v-bind="secondColSize">小学;五年级;教学</Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">教材信息:</Col>
        <Col v-bind="secondColSize">新东方英语七下 ； Unit2 ； SectionB</Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">简介:</Col>
        <Col v-bind="secondColSize">希望课程观看愉快！</Col>
      </Row>
      <Row :gutter="20" class="each-row">
        <Col v-bind="firstColSize" class="first-col">发布范围:</Col>
        <Col v-bind="secondColSize">分享学校</Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      firstColSize: {
        lg: 3,
        md: 4,
        xs: 24
      },
      secondColSize: {
        lg: 21,
        md: 20,
        xs: 24
      }
    };
  },
  methods: {
    goCommentList() {
      console.log("跳转至留言列表");
    }
  }
};
</script>

<style scoped lang="scss">
.index {
  .header {
    padding: 10px 0;
    position: relative;
    background: red;
    .status {
      font-size: 14px;
      color: #333;
      vertical-align: baseline;
      margin-left: 10px;
    }
    .button-group {
      @include center;
      right: 10px;
    }
  }

  .desc {
    border: 1px solid #ddd;
    margin: 5px 0;
    .desc-item {
      padding: 0 10px;
      border-right: 1px solid red;
      margin: 10px 0;
      font-size: 20px;
      &:last-child {
        border-right: none;
      }
    }
  }

  .content {
    font-size: 16px;
    .each-row {
      margin: 20px 0;
      .first-col {
        text-align: right;
      }
    }
  }
}
</style>
