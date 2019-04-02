<!--macarole@2019/4/1-->
<template>
  <div class="index">
    <XHDataGrid
      :query-data="querys"
      :control-data="controls"
      :table-data="activitiesData"
      :table-columns="activitiesColumns"
      :total="total"
      @search="onSearch"
      @on-selection-change="onSelectionChange"
    ></XHDataGrid>
  </div>
</template>

<script>
import XHDataGrid from "_bc/data-grid";
import { mapActions } from "vuex";

export default {
  name: "index",
  components: {
    XHDataGrid
  },
  data() {
    let vm = this;
    return {
      selections: [], //选择项
      commentSwitch: false,
      querys: [
        {
          type: "select",
          model: "status",
          defaultValue: "",
          list: [
            //全部状态
            {
              value: "ztlx-0",
              label: "全部"
            },
            {
              value: "1",
              label: "待审核"
            },
            {
              value: "2",
              label: "已通过"
            },
            {
              value: "3",
              label: "未通过"
            },
            {
              value: "4",
              label: "已过期"
            },
            {
              value: "5",
              label: "已下架"
            }
          ]
        },
        {
          type: "button",
          btnType: "primary",
          label: "查询",
          icon: "ios-search"
        }
      ],
      controls: [
        {
          btnType: "text",
          width: 100,
          icon: "ios-trash-outline",
          label: "展示",
          handler() {
            console.log("当前选中项为");
            console.log(vm.selections);
          }
        },
        {
          btnType: "text",
          width: 100,
          icon: "ios-download-outline",
          label: "不展示",
          handler() {
            alert("不展示");
          }
        },
        {
          btnType: "text",
          width: 100,
          icon: "ios-download-outline",
          label: "回复",
          handler() {
            alert("导出表格");
          }
        },
        {
          btnType: "text",
          width: 100,
          icon: "ios-download-outline",
          label: "删除",
          handler() {
            alert("删除");
          }
        }
      ],
      activitiesData: [],
      activitiesColumns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "留言内容",
          key: "content"
        },
        {
          title: "留言人",
          key: "commenter"
        },
        {
          title: "留言时间",
          key: "comment_time",
          sortable: "custom"
        },
        {
          title: "课程信息",
          key: "course_info"
        },
        {
          title: "当前状态",
          key: "status",
          sortable: "custom"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return (
              <div>
                <Button
                  type="primary"
                  size="small"
                  style={{ marginRight: "5px" }}
                  on-click={vm.show.bind(vm, params.index)}
                >
                  关闭留言
                </Button>
                <Button
                  type="error"
                  size="small"
                  on-click={vm.remove.bind(vm, params.index)}
                >
                  删除
                </Button>
              </div>
            );
          }
        }
      ],
      total: 100
    };
  },
  methods: {
    ...mapActions(["getCommentsList"]),
    onSearch(params) {
      console.log("当前参数为");
      console.log(params);
      let me = this;
      me.getCommentsList()
        .then(res => {
          console.log("拿到结果了");
          console.log(res);
          me.activitiesData = res["data"];
        })
        .catch(err => {
          console.log("出错误了");
        });
    },
    onSelectionChange(selection) {
      this.selections = selection;
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.activitiesData[index].name}<br>Age：${
          this.activitiesData[index].age
        }<br>Address：${this.activitiesData[index].address}`
      });
    },
    remove(index) {
      this.activitiesData.splice(index, 1);
    }
  }
};
</script>

<style scoped lang="scss">
.index {
}
</style>
