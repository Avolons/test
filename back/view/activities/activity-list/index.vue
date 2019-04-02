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
          model: "place",
          defaultValue: "fbfw-0",
          placeholder: "请选择发布范围",
          list: [
            //发布范围
            {
              value: "fbfw-0",
              label: "全部"
            },
            {
              value: "fbfw-1",
              label: "分享学校"
            },
            {
              value: "fbfw-2",
              label: "全县(市,区)"
            },
            {
              value: "fbfw-3",
              label: "全省"
            }
          ]
        },
        {
          type: "select",
          model: "type",
          defaultValue: "",
          placeholder: "请选择课程类型",
          list: [
            //课程类型
            {
              value: "kclx-0",
              label: "全部课程"
            },
            {
              value: "kclx-1",
              label: "课程类型1"
            },
            {
              value: "kclx-2",
              label: "课程类型2"
            },
            {
              value: "kclx-3",
              label: "课程类型3"
            }
          ]
        },
        {
          type: "datetimerange",
          model: "timerange",
          defaultValue: [],
          placeholder: "请选择课程时间范围",
          placement: "bottom-start"
        },
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
          type: "text",
          model: "input",
          defaultValue: "",
          placeholder: "请输入名称"
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
          icon: "ios-trash-outline",
          label: "创建课程",
          handler() {
            console.log("当前选中项为");
            console.log(vm.selections);
            vm.$router.push({
              name: "create-edit",
              query: {
                type: "create"
              }
            });
          }
        },
        {
          type: "custom",
          width: 150,
          render() {
            return (
              <Button type="text">
                <i-switch
                  size="small"
                  v-model={vm.commentSwitch}
                  on-on-change={val => (vm.commentSwitch = val)}
                />
                {vm.commentSwitch ? "关闭留言" : "开启留言"}
              </Button>
            );
          }
        },
        {
          btnType: "text",
          icon: "ios-trash-outline",
          label: "删除",
          handler() {
            alert("当前选中项为");
            console.log(vm.selections);
          }
        },
        {
          btnType: "text",
          icon: "ios-download-outline",
          label: "导出表格",
          handler() {
            alert("导出表格");
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
          title: "课名",
          key: "name"
        },
        {
          title: "课程类型",
          key: "type"
        },
        {
          title: "开始时间",
          key: "startTime",
          sortable: "custom",
          sortType: "desc"
        },
        {
          title: "发布范围",
          key: "place"
        },
        {
          title: "上传时间",
          key: "publicTime",
          sortable: "custom"
        },
        {
          title: "关注度",
          key: "concern",
          sortable: "custom"
        },
        {
          title: "状态",
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
    ...mapActions(["getActivitiesList"]),
    onSearch(params) {
      console.log("当前参数为");
      console.log(params);
      this.getActivitiesList()
        .then(res => {
          console.log("拿到结果了");
          console.log(res);
          this.activitiesData = res["data"];
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
