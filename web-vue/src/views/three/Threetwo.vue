<template>
  <div class="wt100 ht100">
    <ul class="box" ref="box">
      <li class="left" ref="left">
        <div class="left-content">
          <el-input v-model="value"></el-input>
          <div v-for="item in 28" :key="item">{{ item }}</div>
          <p>
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </p>
        </div>
      </li>
      <li class="resize" ref="resize"></li>
      <li class="mid" ref="mid">
        <div class="left-content">
          <p>
            测试可以左右拖拽布局，左右两边设置有最小宽度
          </p>
          <div v-for="item in 38" :key="item">{{ item }}</div>
          <p>
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      value: ''
    }
  },
  computed: {
    asidewidth() {
      return this.$store.state.asideWidth
    }
  },
  watch: {
    asidewidth() {
      let mid = document.getElementsByClassName('mid')
      let box = document.getElementsByClassName('box')
      let left = document.getElementsByClassName('left')
      left[0].style.width = left[0].clientWidth
      mid[0].style.width = box[0].clientWidth - 10 - left[0].clientWidth + 'px'

      this.dragControllerDiv()
    }
  },
  mounted() {
    this.dragControllerDiv()
    window.resize = () => {
      let mid = document.getElementsByClassName('mid')
      let box = document.getElementsByClassName('box')
      let left = document.getElementsByClassName('left')
      left[0].style.width = left[0].clientWidth
      mid[0].style.width = box[0].clientWidth - 10 - left[0].clientWidth + 'px'
      this.dragControllerDiv()
    }
  },
  methods: {
    dragControllerDiv() {
      var resize = document.getElementsByClassName('resize')
      var left = document.getElementsByClassName('left')
      var mid = document.getElementsByClassName('mid')
      var box = document.getElementsByClassName('box')
      // let asidewidth = document.getElementById('aside-width').clientWidth
      let asidewidth = this.asidewidth
      // 鼠标按下事件
      resize[0].onmousedown = e => {
        var startX = e.clientX
        resize[0].left = resize[0].offsetLeft
        // 鼠标拖动事件
        document.onmousemove = e => {
          var endX = e.clientX
          var moveLen = resize[0].left + (endX - startX) - asidewidth - 20 // （endx-startx）=移动的距离。resize[0].left+移动的距离=左边区域最后的宽度
          var maxT = box[0].clientWidth - resize[0].offsetWidth // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

          if (moveLen < 150) moveLen = 150 // 左边区域的最小宽度为150px
          if (moveLen > maxT - 150) moveLen = maxT - 150 //右边区域最小宽度为150px

          resize[0].style.left = moveLen // 设置左侧区域的宽度

          left[0].style.width = moveLen + 'px'
          mid[0].style.width = box[0].clientWidth - moveLen - 10 + 'px'
        }
        // 鼠标松开事件
        document.onmouseup = () => {
          document.onmousemove = null
          document.onmouseup = null
          resize[0].releaseCapture && resize[0].releaseCapture() //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
        }
        resize[0].setCapture && resize[0].setCapture() //该函数在属于当前线程的指定窗口里设置鼠标捕获
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.clear {
  clear: both;
}
ul,
li {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.left {
  width: calc(30% - 10px);
  height: 100%;
  background: #c9c9c9;
  float: left;
  overflow: hidden;
  .left-content {
    clear: both;
    width: calc(100% -20px);
    height: calc(100% - 20px);
    padding: 10px;
    overflow: auto;
    p {
      word-break: break-all;
    }
  }
}
.resize {
  width: 5px;
  height: 100%;
  cursor: w-resize;
  float: left;
}
.mid {
  float: left;
  width: 70%;
  height: 100%;
  background: #f3f3f3;
  overflow: hidden;
  .left-content {
    clear: both;
    width: calc(100% -20px);
    height: calc(100% - 20px);
    padding: 10px;
    overflow: auto;
    p {
      word-break: break-all;
    }
  }
}
</style>
