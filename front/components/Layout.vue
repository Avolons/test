<style lang="scss">
.layout{
    &_main{
        width: 1200px;
        margin: 0 auto;
        margin-bottom: 16px;
    }
}
</style>

<template lang="pug">
    .layout
        component-header
        .layout_main
            router-view
        component-footer
</template>
<script>
import ComponentHeader from './Header'
import ComponentFooter from './Footer'
export default {
    components:{
        ComponentHeader,
        ComponentFooter
    }
}
</script>
