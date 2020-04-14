<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('user', ['name'])
  },
  created () {
    console.log(this.name)
  }
}
</script>
<style lang="less" scoped>
  @import "../style/var";
  .about {

    h1 {
      color: @ColorRed;
    }
  }
</style>
