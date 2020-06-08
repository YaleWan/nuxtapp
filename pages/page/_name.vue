<template>
  <div
    id="container"
    :style="{ backgroundImage: 'url(' + pageInfo.img_small + ')' }"
  >
    <img
      v-if="pageInfo.img_src"
      :src="pageInfo.img_src"
      alt="活动图"
      @load="loadImage"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route, error }) {
    const { data, status } = await $axios.$get(
      `/api/generator/getPage?name=${route.params.name}`
    )
    if (status === 200 && data) {
      return { pageInfo: data }
    }
    error({ statusCode: 404, message: '页面未找到或没有数据！' })
  },
  created() {
    // 引入第三方插件
    if (process.client) {
      this.initSecShare()
      this.initAppShare()
    }
  },
  methods: {
    loadImage() {
      const imgWrapper = document.getElementById('container')
      imgWrapper && (imgWrapper.style.backgroundImage = 'none')
    },
    initSecShare() {
      try {
        window.che300Share({
          title: `测试`,
          summary: '测试',
          pic: 'https://ssl-assets.che300.com/feimg/bapp/about_1.png',
          url: window.location.href
        })
      } catch (err) {
        // warn(`初始化二次分享发生错误: ${err}`)
      }
    },
    initAppShare() {
      const myC3Api = new window.C3API({ debug: false, mock: false }).pro
      const shareConf = {
        share_title: '测试',
        share_text: '测试',
        share_url: window.location.href,
        share_img: 'https://ssl-assets.che300.com/feimg/bapp/about_1.png'
      }
      try {
        myC3Api.addShare(shareConf, () => {
          // Toast('分享成功');
        })
      } catch (err) {
        // warn(`初始化app分享的时候发生错误: ${err}`)
      }
    }
  },
  head({ pageInfo }) {
    return {
      title: pageInfo.title,
      script: [
        {
          src: 'https://fezz.ceshi.che300.com/c3api/C3API.js'
        },
        {
          src: 'https://fezz.che300.com/libs/che300Share/share.min.1.4.2.js'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
