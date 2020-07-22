<template>
  <div>
    <div>login:{{ data }}</div>
    <el-button @click="gotoHome">
      去home页
    </el-button>
  </div>
</template>
<script>
import API from './APIServices'
export default {
  name: 'Login',
  data() {
    return {
      data: 'login'
    }
  },
  mounted() {
    this.getdata()
    API.getHomeData().then(res => {
      console.log('dddd', res.data)
    })
  },
  methods: {
    getdata() {
      this.data = 'haaha'
    },
    gotoHome() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>
