<!--macarole@2019/4/1-->
<template>
  <div class="data-grid">
    <!--查询条-->
    <Query @search="onQuerySearch" class="Query" :query-data="queryData" />
    <!--控件条-->
    <Control :control-data="controlData" />
    <!--表单-->
    <Table
      ref="table"
      :data="tableData"
      :columns="tableColumns"
      stripe
      :height="tableHeight"
      @on-sort-change="onSortChange"
    >
      <slot name="table-header" slot="header"></slot>
      <slot name="table-footer" slot="footer"></slot>
      <slot name="table-loading" slot="loading"></slot>
    </Table>
    <!--分页条-->
    <Page
      ref="page"
      class="page"
      v-bind="pageProps"
      @on-change="onCurrentPage"
      @on-page-size-change="onPageSizeChange"
    ></Page>
  </div>
</template>

<script>
import Query from "./query";
import Control from "./control";
import PropTypes, { pagePropTypes } from "./prop-types";
import tableEvents from "./table-events.js";
import pageEvents from "./page-options";

export default {
  name: "data-grid",
  components: {
    Query,
    Control
  },
  props: PropTypes,
  data() {
    return {
      tableHeight: 0,
      query: null, //查询条里面的条件
      innerPageCurrent: this.current,
      innerPageSize: this.pageSize,
      innerSortKey: "",
      innerSortOrder: ""
    };
  },
  created() {
    this.setSort(this.tableColumns);
  },
  mounted() {
    let me = this;
    me.fireEvent();
    me.autoHeight();
    window.addEventListener("resize", me.autoHeight());
  },
  methods: {
    setSort(arr) {
      let me = this;
      for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current["sortable"] && current["sortType"]) {
          me.innerSortKey = current["key"];
          me.innerSortOrder = current["sortType"];
          if (current.children && current.children.length) {
            me.setSort(current.children);
          }
        }
      }
    },
    autoHeight() {
      let me = this;
      me.$nextTick(function() {
        let fullHeight = window.innerHeight;
        let tableTop = me.$refs.table.$el.getBoundingClientRect().top;
        let pageHeight = me.$refs.page.$el.offsetHeight;
        me.tableHeight = fullHeight - tableTop - pageHeight - 18;
      });
    },
    fireEvent() {
      let me = this;
      tableEvents.forEach((item, index) => {
        me.$refs.table.$on(item, (...rest) => {
          me.$emit(item, ...rest);
        });
      });

      for (let pageEventsKey in pageEvents) {
        me.$refs.page.$on(pageEventsKey, (...rest) => {
          me.$emit(pageEvents[pageEventsKey], ...rest);
        });
      }
    },
    onQuerySearch(options) {
      this.query = options;
      this.fireSearch();
    },
    fireSearch() {
      this.$emit("search", this.allParams);
    },
    onCurrentPage(current, b) {
      this.innerPageCurrent = current;
      this.fireSearch();
    },
    onPageSizeChange(size) {
      this.innerPageSize = size;
      this.fireSearch();
    },
    onSortChange(a, b, c) {
      this.innerSortKey = a.key;
      this.innerSortOrder = a.order;
      this.fireSearch();
    }
  },
  computed: {
    pageProps() {
      let result = {};
      for (let key in pagePropTypes) {
        result[key] = this[key];
      }
      return result;
    },
    allParams() {
      let result = {};
      return {
        ...this.query,
        key: this.innerSortKey,
        order: this.innerSortOrder,
        current: this.innerPageCurrent,
        size: this.innerPageSize
      };
    }
  }
};
</script>

<style scoped lang="scss">
@mixin tempSize {
  margin: 10px 0;
}

.data-grid {
  .Query {
    @include tempSize;
  }

  .page {
    padding: 5px 0;
  }
}
</style>
