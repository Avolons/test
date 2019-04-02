<template>
  <Card :shadow="shadow" class="img-card-wrapper" :padding="0">
    <div class="content-con">
      <div class="top-area" :style="{ background: color, height: topHeight }">
        <common-icon class="icon" :type="icon" :size="iconSize" color="#fff" />
      </div>
      <div class="bottom-area" :style="{ height: bottomHeight }">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import CommonIcon from "_bc/common-icon";

export default {
  name: "ImgCard",
  components: {
    CommonIcon
  },
  props: {
    top: {
      type: Number,
      default: 64
    },
    color: {
      type: String,
      default: "#2d8cf0"
    },
    icon: {
      type: String,
      default: ""
    },
    iconSize: {
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
    }
  }
};
</script>

<style lang="scss">
@mixin common {
  width: 100%;
  display: table;
  text-align: center;
}

.img-card-wrapper {
  @include size;
  overflow: hidden;

  .ivu-card-body {
    @include size;
  }

  .content-con {
    @include size;
    position: relative;

    .top-area {
      @include common;

      & > .icon {
        @include middle-center;
      }
    }

    .bottom-area {
      @include common;

      & > div {
        @include middle-center;
      }
    }
  }
}
</style>
