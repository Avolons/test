export const newPropTypes = {
  queryData: {
    type: Array,
    default: () => []
  },
  controlData: {
    type: Array,
    default: () => []
  },
  tableData: {
    type: Array,
    required: true
  },
  tableColumns: {
    type: Array,
    required: true
  }
};
export const pagePropTypes = {
  total: {
    type: Number,
    default: 0
  },
  current: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pageSizeOpts: {
    type: Array,
    default: () => [10, 20, 30, 40]
  },
  placement: {
    type: String,
    default: "bottom",
    validator(value) {
      return ["bottom", "top"].includes(value);
    }
  },
  simple: {
    type: Boolean,
    default: false
  },
  showTotal: {
    type: Boolean,
    default: false
  },
  showElevator: {
    type: Boolean,
    default: false
  },
  showSizer: {
    type: Boolean,
    default: false
  }
};
export default {
  ...newPropTypes,
  ...pagePropTypes
};
