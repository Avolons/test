<template>
  <Card :shadow="shadow" class="number-card-wrapper" :padding="0">
    <div class="content-con">
      <div class="top-area" :style="valueStyles">
        <span class="content">{{ value }}</span>
      </div>
      <div class="bottom-area" :style="titleStyles">
        <span class="content">{{ title }}</span>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  name: "NumberCard",
  props: {
    top: {
      type: Number,
      default: 64
    },
    color: {
      type: String,
      default: "#2d8cf0"
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    fontSize: {
      type: Number,
      default: 20
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    topHeight() {
      return `${this.top}%`;
    },
    bottomHeight() {
      return `${100 - this.top}%`;
    },
    valueStyles() {
      return {
        background: this.color,
        height: this.topHeight,
        fontSize: `${this.fontSize}px`
      };
    },
    titleStyles() {
      return {
        height: this.bottomHeight
      };
    }
  }
};
</script>

<style lang="scss">
.number-card-wrapper {
  @include size;
  overflow: hidden;

  .ivu-card-body {
    @include size;
  }

  .content-con {
    @include size;
    position: relative;

    .top-area,
    .bottom-area {
      @include common;
      & > .content {
        @include text-overflow;
      }
    }
  }
}
</style>
