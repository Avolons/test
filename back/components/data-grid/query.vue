<!--macarole@2019/4/1-->
<template>
  <Row :gutter="20" class="Query">
    <Col
      v-bind="$config.rowSize"
      class="query-item"
      v-for="(query, idx) in queryData"
      :key="'query-' + idx"
    >
      <template v-if="query.type === 'select'">
        <Select
          v-model="innerQuery[query.model]"
          :placeholder="query.placeholder"
        >
          <Option
            v-for="item in query.list"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}
          </Option>
        </Select>
      </template>
      <template v-else-if="query.type === 'datetimerange'">
        <DatePicker
          type="datetimerange"
          :placement="query.placement"
          :placeholder="query.placeholder"
          v-model="innerQuery[query.model]"
        ></DatePicker>
      </template>
      <template v-else-if="query.type === 'text'">
        <Input
          v-model="innerQuery[query.model]"
          :placeholder="query.placeholder"
        />
      </template>
      <template v-else-if="query.type === 'button'">
        <Button :type="query.btnType" @click="fireSearch">
          <common-icon
            class="icon"
            :type="query.icon"
            :size="query.iconSize || 20"
            color="#000"
          />
          {{ query.label }}
        </Button>
      </template>
    </Col>
  </Row>
</template>

<script>
import CommonIcon from "../common-icon";

export default {
  name: "query",
  props: {
    queryData: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CommonIcon
  },
  created() {
    this.initQuery();
    this.fireSearch();
  },
  data() {
    return {
      innerQuery: {}
    };
  },
  methods: {
    fireSearch() {
      this.$emit("search", { ...this.innerQuery });
    },
    initQuery() {
      let result = {};
      let me = this;
      for (let i = 0; i < me.queryData.length; i++) {
        let currentQuery = me.queryData[i];
        if (currentQuery["model"]) {
          result[currentQuery["model"]] = currentQuery["defaultValue"];
        }
      }
      me.innerQuery = result;
    }
  }
};
</script>

<style scoped lang="scss">
.query {
  border: 1px solid #dcdee2;
  padding: 10px 0;
  margin: 0 !important;

  .query-item {
  }
}
</style>
