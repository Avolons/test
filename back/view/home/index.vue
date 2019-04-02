<!--macarole@2019/3/28-->
<template>
  <div class="index">
    <!--上面待审核-->
    <Row :gutter="20">
      <Col
        :xs="12"
        :md="8"
        :lg="4"
        v-for="(img, i) in imgCardData"
        :key="`img-${i}`"
        style="height: 200px;padding-bottom: 10px;"
      >
        <img-card shadow :color="img.color" :icon="img.icon" :icon-size="36">
          <p>
            {{ img.title }}<span style="color:red;">({{ img.value }})</span>
          </p>
        </img-card>
      </Col>
    </Row>
    <!--下面信息卡片-->
    <Row :gutter="20">
      <Col
        :xs="12"
        :md="8"
        :lg="4"
        v-for="(number, i) in numberCardData"
        :key="`number-${i}`"
        style="height: 200px;padding-bottom: 10px;"
      >
        <number-card shadow v-bind="number" :font-size="36" />
      </Col>
    </Row>
  </div>
</template>

<script>
import ImgCard from "_bc/img-card";
import NumberCard from "_bc/number-card";

export default {
  name: "index",
  components: {
    ImgCard,
    NumberCard
  },
  data() {
    return {
      imgCardData: [
        { title: "待审核", icon: "md-person-add", value: 27, color: "#2d8cf0" },
        { title: "新留言", icon: "md-locate", value: 7, color: "#19be6b" }
      ],
      numberCardData: [
        {
          title: "新增用户",
          icon: "md-person-add",
          value: 803,
          color: "#2d8cf0"
        },
        { title: "累计点击", icon: "md-locate", value: 232, color: "#19be6b" },
        {
          title: "新增问答",
          icon: "md-help-circle",
          value: 142,
          color: "#ff9900"
        },
        { title: "分享统计", icon: "md-share", value: 657, color: "#ed3f14" },
        {
          title: "新增互动",
          icon: "md-chatbubbles",
          value: 12,
          color: "#E46CBB"
        },
        { title: "新增页面", icon: "md-map", value: 14, color: "#9A66E4" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.index {
}
</style>
