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
          model: "place",
          defaultValue: "fbfw-0",
          placeholder: "请选择学段/年级",
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
          model: "subject",
          defaultValue: "subject-0",
          placeholder: "请选择学科类型",
          list: [
            //学科类型
            {
              value: "subject-0",
              label: "全学科"
            },
            {
              value: "subject-1",
              label: "学科类型1"
            },
            {
              value: "subject-2",
              label: "学科类型2"
            },
            {
              value: "subject-3",
              label: "学科类型3"
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
          label: "通过",
          handler() {
            console.log("当前选中项为");
            console.log(vm.selections);
          }
        },
        {
          btnType: "text",
          width: 100,
          icon: "ios-download-outline",
          label: "不通过",
          handler() {
            alert("不展示");
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
