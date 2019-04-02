<!--macarole@2019/4/1-->
<template>
  <Row :gutter="20" class="control">
    <Col
      v-bind="controlSize"
      v-for="(item, idx) in controlData"
      :style="{ width: item.width + 'px' }"
      :key="`control-${idx}`"
    >
      <template v-if="item.type === 'custom'">
        <CustomRender :render="item.render"></CustomRender>
      </template>
      <template v-else>
        <Button :type="item.btnType" @click="item.handler">
          <common-icon
            class="icon"
            :type="item.icon"
            :size="item.iconSize || 20"
            color="#000"
          />
          {{ item.label }}</Button
        >
      </template>
    </Col>
  </Row>
</template>

<script>
import CustomRender from "./customRender";
import CommonIcon from "../common-icon";
export default {
  name: "control",
  components: {
    CustomRender,
    CommonIcon
  },
  props: {
    controlData: {
      type: Array,
      default: () => []
    },
    controlSize: {
      type: Object,
      default: () => ({
        xs: 12,
        md: 4,
        lg: 2
      })
    }
  }
};
</script>

<style scoped lang="scss">
.control {
  border: 1px solid #dcdee2;
  border-bottom: none;
  padding: 10px 0;
  margin-top: 5px;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
