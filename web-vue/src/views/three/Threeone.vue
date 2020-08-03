<template>
  <div class="ht100">
    <div class="canvas-header">
      <h1>canvas练习</h1>
      <p>
        制作一个简陋的仪表盘，当鼠标放在指针上时可以显示一个modal，并显示当前值
      </p>
    </div>
    <div class="text-align-center">
      <canvas
        ref="mycanvas1"
        id="mycanvas1"
        width="540"
        height="500"
        class="bg-ccc"
        @mousemove="handleMouseMove($event)"
      ></canvas>
      <div class="style-test" id="canvas-value">
        完成率： {{ this.numdata.toFixed(2) }}%
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Twoone',
  data() {
    return {
      data: [],
      canvas: null,
      canvas1: null,
      colorList: ['red', 'yellow', 'green'],
      numdata: 0,
      mouseEvent: '',
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.canvas1 = null
      let numdata = Math.random() * 100 - 0
      this.numdata = numdata

      let divObj = document.getElementById('canvas-value')
      divObj.innerHTML = ' 完成率：' + numdata.toFixed(2) + '%'
      if (parseInt(numdata / 10) < 3) {
        divObj.style.color = this.colorList[0]
      }
      if (parseInt(numdata / 10) >= 3 && parseInt(numdata / 10) < 7) {
        divObj.style.color = this.colorList[1]
      }
      if (parseInt(numdata / 10) >= 7) {
        divObj.style.color = this.colorList[2]
      }

      if (!this.mouseEvent) {
        divObj.style.display = 'none'
      }

      this.initCanvas1(numdata)
    }, 10000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    semi(x, y) {
      if (x > y) {
        return y / 2
      } else {
        return x / 2
      }
    },
    // 右边canvas，仪表盘
    initCanvas1(num) {
      this.canvas1 = this.$refs.mycanvas1
      let canvas = document.getElementById('mycanvas1')
      let context = canvas.getContext('2d')
      let canvasWidth = canvas.width
      let canvasHeight = canvas.height
      let arcSemi = this.semi(canvasWidth, canvasHeight)
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      // 外环
      context.save()
      context.beginPath()
      context.arc(
        canvasWidth / 2,
        canvasHeight / 2,
        arcSemi - 20,
        (1 / 3) * Math.PI,
        (2 / 3) * Math.PI,
        true
      )
      context.lineWidth = 1
      context.strokeStyle = '#2DC7C8'
      context.stroke()
      context.restore()

      // 内环
      context.save()
      context.beginPath()
      context.arc(
        canvasWidth / 2,
        canvasHeight / 2,
        arcSemi - 43,
        (1 / 3) * Math.PI,
        (2 / 3) * Math.PI,
        true
      )
      context.lineWidth = 1
      context.strokeStyle = '#2DC7C8'
      context.stroke()
      context.restore()
      context.save()
      // i是长刻度，J是短刻度
      for (let i = 0, angle = (2 / 3) * Math.PI, tmp, len; i < 10; i++) {
        context.beginPath()
        context.lineWidth = 1
        len = 30
        tmp = arcSemi - 20 - 1
        context.moveTo(
          canvasWidth / 2 + tmp * Math.cos(angle),
          canvasHeight / 2 + tmp * Math.sin(angle)
        )
        context.lineTo(
          canvasWidth / 2 + (tmp - len + 10) * Math.cos(angle),
          canvasHeight / 2 + (tmp - len + 10) * Math.sin(angle)
        )
        if (i <= 2) {
          context.strokeStyle = this.colorList[0]
          context.fillStyle = this.colorList[0]
        }
        if (i > 2 && i <= 6) {
          context.strokeStyle = this.colorList[1]
          context.fillStyle = this.colorList[1]
        }
        if (i > 6) {
          context.strokeStyle = this.colorList[2]
          context.fillStyle = this.colorList[2]
        }

        context.fill()
        context.stroke()
        for (let j = 0, angle1 = angle; j < 4; j++) {
          angle1 += Math.PI / 30
          context.beginPath()
          context.lineWidth = 2
          context.moveTo(
            canvasWidth / 2 + tmp * Math.cos(angle1),
            canvasHeight / 2 + tmp * Math.sin(angle1)
          )
          context.lineTo(
            canvasWidth / 2 + (tmp - 10) * Math.cos(angle1),
            canvasHeight / 2 + (tmp - 10) * Math.sin(angle1)
          )
          context.fill()
          context.stroke()
        }

        tmp -= len
        context.font = '16px Calibri'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(
          i * 10,
          canvasWidth / 2 + tmp * Math.cos(angle),
          canvasHeight / 2 + tmp * Math.sin(angle)
        )
        context.closePath()
        angle += Math.PI / 6
      }
      context.restore()
      // 最后一个刻度，100
      context.save()
      context.beginPath()
      context.lineWidth = 1
      context.moveTo(
        canvasWidth / 2 + (arcSemi - 20 - 1) * Math.cos((14 * Math.PI) / 6),
        canvasHeight / 2 + (arcSemi - 20 - 1) * Math.sin((14 * Math.PI) / 6)
      )
      context.lineTo(
        canvasWidth / 2 + (arcSemi - 43) * Math.cos((14 * Math.PI) / 6),
        canvasHeight / 2 + (arcSemi - 43) * Math.sin((14 * Math.PI) / 6)
      )
      context.strokeStyle = this.colorList[2]
      context.fillStyle = this.colorList[2]
      context.fill()
      context.stroke()
      context.font = '16px Calibri'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillText(
        100,
        canvasWidth / 2 + (arcSemi - 53) * Math.cos((14 * Math.PI) / 6),
        canvasHeight / 2 + (arcSemi - 53) * Math.sin((14 * Math.PI) / 6)
      )
      context.restore()

      // 显示文字
      context.save()
      context.font = '20px Georgia'
      context.textAlign = 'center'
      // 创建渐变
      let gradient = context.createLinearGradient(0, 0, canvasWidth, 0)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1', 'red')
      // 用渐变填色
      context.fillStyle = gradient
      context.fillText(
        '值：' + num.toFixed(2) + '%',
        canvasWidth / 2,
        canvasHeight - 43
      )
      context.restore()

      // 画指针
      context.save()
      context.beginPath()

      context.arc(
        canvasWidth / 2,
        canvasHeight / 2,
        5,
        (1 / 6 + ((num / 10) * 1) / 6) * Math.PI,
        (7 / 6 + ((num / 10) * 1) / 6) * Math.PI,
        true
      )
      if (parseInt(num / 10) < 3) {
        context.fillStyle = this.colorList[0]
        context.strokeStyle = this.colorList[0]
      }
      if (parseInt(num / 10) >= 3 && parseInt(num / 10) < 7) {
        context.fillStyle = this.colorList[1]
        context.strokeStyle = this.colorList[1]
      }
      if (parseInt(num / 10) >= 7) {
        context.fillStyle = this.colorList[2]
        context.strokeStyle = this.colorList[2]
      }
      context.fill()
      context.stroke()

      context.moveTo(
        canvasWidth / 2 + 5 * Math.cos(((num + 10) / 60) * Math.PI),
        canvasHeight / 2 + 5 * Math.sin(((num + 10) / 60) * Math.PI)
      )

      context.lineTo(
        canvasWidth / 2 +
          (arcSemi - 80) *
            Math.cos((num / 100) * (10 / 6) * Math.PI + (2 / 3) * Math.PI),
        canvasHeight / 2 +
          (arcSemi - 80) *
            Math.sin((num / 100) * (10 / 6) * Math.PI + (2 / 3) * Math.PI)
      )
      context.lineTo(
        canvasWidth / 2 - 5 * Math.cos(((num + 10) / 60) * Math.PI),
        canvasHeight / 2 - 5 * Math.sin(((num + 10) / 60) * Math.PI)
      )

      if (parseInt(num / 10) < 3) {
        context.fillStyle = this.colorList[0]
        context.strokeStyle = this.colorList[0]
      }
      if (parseInt(num / 10) >= 3 && parseInt(num / 10) < 7) {
        context.fillStyle = this.colorList[1]
        context.strokeStyle = this.colorList[1]
      }
      if (parseInt(num / 10) >= 7) {
        context.fillStyle = this.colorList[2]
        context.strokeStyle = this.colorList[2]
      }
      context.closePath()
      context.fill()
      context.stroke()
      context.restore()
      if (this.mouseEvent !== '') {
        this.handleMouseMove(this.mouseEvent)
      }
    },
    handleMouseMove(e) {
      this.mouseEvent = e
      let divObj = document.getElementById('canvas-value')
      let rect = document.getElementById('mycanvas1').getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      divObj.style.left = e.clientX + 10 + 'px'
      divObj.style.top = e.clientY + 10 + 'px'
      if (
        document
          .getElementById('mycanvas1')
          .getContext('2d')
          .isPointInPath(x, y)
      ) {
        divObj.style.display = 'block'
      } else {
        divObj.style.display = 'none'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.canvas-header {
  h1,
  p {
    margin: 10px 0px;
  }
  p {
    text-indent: 2em;
  }
}
.bg-ccc {
  background: #ccc;
}
.style-test {
  background: rgba(50, 50, 50, 0.5);
  position: absolute;
  border-radius: 5px;
  padding: 10px;
  display: none;
}
</style>
