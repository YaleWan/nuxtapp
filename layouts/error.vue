<template>
  <div class="container">
    <div v-if="error.statusCode === 404" class="page404">
      {{ error }}
      <img
        src="https://assets.che300.com/feimg/h5/default/not-found.png"
        class="main-img"
      />
      <div class="text-desc">您要查看的页面不存在或者已删除</div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>
<style lang="less" scoped>
.page404 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  font-size: 26px;
  img {
    width: 375px;
    height: 320px;
  }
}
</style>
