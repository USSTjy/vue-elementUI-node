<template>
  <div class="ht100 wt100">
    <div class="ht100 wt100 overflow-y-auto">
      <p>1、列举获取DOM元素的方式</p>
      <div class="view-dom">
        <p>通过ID获取（document.getElementById）</p>
        <p>通过类名(document.getElementsByClassName)</p>
        <p>通过name属性(document.getElementsByName)</p>
        <p>通过标签名(document.getElementsByTagName)</p>
        <p>通过选择器获取一个元素（document.querySelector）</p>
        <p>通过选择器获取一组元素（document.querySelectorAll）</p>
        <p>获取html的方法（documemt.documentElement）</p>
        <p>获取body的方法(document.body)</p>
      </div>
      <p>2、CSS动画，div每秒移动100px</p>
      <div class="wt100">
        <div class="animation-test"></div>
      </div>

      <p>3、CSS垂直居中或水平居中</p>
      <div>垂直居中</div>
      <div class="css-center">
        <div class="css-test1"></div>
      </div>
      <div>水平居中</div>
      <div class="css-center">
        <div class="css-test2"></div>
      </div>

      <div>垂直居中</div>
      <div class="css-center1">
        <div class="css-test1"></div>
      </div>
      <div>水平居中</div>
      <div class="css-center1">
        <div class="css-test2"></div>
      </div>

      <p>4、实现圣杯布局/双飞翼布局</p>
      <div>
        圣杯布局是经典的css布局，左右两栏的宽度固定不变，中间那一栏是自适应
      </div>
      <div>float实现</div>
      <div class="float-box">
        <div class="float-left">
          left
          <div v-for="item in 20" :key="item">{{ item }}</div>
        </div>
        <div class="float-main">middle</div>
        <div class="float-right">right</div>
      </div>
      <div>flex实现</div>
      <div class="flex-box">
        <div class="flex-left">
          left
          <div v-for="item in 20" :key="item">{{ item }}</div>
        </div>
        <div class="flex-main">middle</div>
        <div class="flex-right">right</div>
      </div>

      <div>position实现</div>
      <div class="position-box">
        <div class="position-left">
          left
          <div v-for="item in 20" :key="item">{{ item }}</div>
        </div>
        <div class="position-main">middle</div>
        <div class="position-right">right</div>
      </div>

      <div>table实现</div>
      <div class="table-box">
        <div class="table-left">
          left
          <div v-for="item in 20" :key="item">{{ item }}</div>
        </div>
        <div class="table-main">middle</div>
        <div class="table-right">right</div>
      </div>
      <div>grid实现</div>
      <div class="grid-box">
        <div class="grid-left">
          left
          <div v-for="item in 20" :key="item">{{ item }}</div>
        </div>
        <div class="grid-main">middle</div>
        <div class="grid-right">right</div>
      </div>
      <p>5、如何理解负margin</p>
      <div class="view-dom">
        <p>
          负边距在普通文档流中的作用和效果（margin-bottom或margin-top负值，会减少高度,增加元素本身的高度，会减少兄弟元素的高度）
        </p>
        <div style="width:100px;height:100px;background:red;"></div>
        <div class="view-margin"></div>
        <p>
          左和右的负边距对元素宽度的影响（margin-right 负值
          没有设置宽度的情况，增加宽度。）
          负边距不仅能影响元素在文档流中的位置，还能增加元素的宽度！
        </p>
        <div style="display:flex">
          <div style="width:100px;height:100px;background:red; overflow:hidden">
            <div
              style="margin-right:50px;height:100px; overflow:auto; word-break:break-all"
            >
              dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </div>
          </div>
          <div style="height:100px;background:skyblue; margin-left:-50px">
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
          </div>
        </div>
        <p>
          负边距对浮动元素的影响（margin-left负值：覆盖）
        </p>
        <div></div>

        <p></p>
      </div>

      <p>6、CSS中哪些属性触发重绘？回流？</p>
      <div></div>

      <p>7、移动端布局</p>
      <div></div>

      <p>8、CSS画一个三角形</p>
      <div class="view-trangle"></div>

      <p>9、实现圆形环状进度条</p>
      <div class="view-circle"></div>

      <p>10、BEM命名法及其用处</p>
      <div></div>

      <p>11、CSS module？</p>
      <div></div>

      <p>12、移动端自适应方案？rem原理？rem和em的区别？</p>
      <div></div>

      <p>13、less, sass作用是什么？</p>
      <div></div>

      <p></p>
      <div></div>

      <p></p>
      <div></div>

      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Four',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
p {
  font-weight: bolder;
}
.view-dom {
  p {
    font-weight: 500;
    text-indent: 2rem;
    line-height: 32px;
  }
}
// 动画
.animation-test {
  width: 200px;
  height: 100px;
  position: relative;
  background: pink;
  animation: moveleft 7s linear infinite;
}
@keyframes moveleft {
  from {
    left: 0px;
  }
  to {
    left: calc(100% - 200px);
  }
}
@-webkit-keyframes moveleft {
  /* Safari and Chrome */
  from {
    left: 0px;
  }
  to {
    left: calc(100% - 200px);
  }
}
// 居中
.css-center {
  width: 400px;
  height: 100px;
  background: skyblue;
  position: relative;
  overflow: hidden;
  .css-test1 {
    width: 100px;
    height: 10px;
    background: #8c2121;
    margin-top: 45px;
    margin-left: auto;
    margin-right: auto;
  }
  .css-test2 {
    margin: 0 auto;
    width: 100px;
    height: 10px;
    background: #ffffff;
  }
}

.css-center1 {
  width: 400px;
  height: 100px;
  background: skyblue;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center; // 水平
  align-items: center; // 垂直
  .css-test1 {
    width: 100px;
    height: 10px;
    background: #8c2121;
  }
  .css-test2 {
    width: 100px;
    height: 10px;
    background: #ffffff;
  }
}
// margin负值
.view-margin {
  width: 100px;
  height: 100px;
  background: skyblue;
  margin-top: -10px;
}
// 三角形
.view-trangle {
  width: 0px;
  height: 0px;
  border-top: 100px solid transparent;
  border-left: 100px solid skyblue;
  border-bottom: 0px solid transparent;
  border-right: 0px solid transparent;
}
// 圆形进度条
.view-circle {
  width: 100px;
  height: 100px;
  background: skyblue;
  border-radius: 50px;
}
// 圣杯布局、
.float-box {
  height: 100px;
  overflow: hidden;
  min-width: 600px;
  .float-left {
    overflow: auto;
    height: 100%;
    width: 200px;
    background: red;
    float: left;
  }
  .float-main {
    overflow: auto;
    height: 100%;
    float: left;
    width: calc(100% - 500px);
    background: pink;
  }
  .float-right {
    overflow: auto;
    height: 100%;
    float: right;
    width: 300px;
    background: purple;
  }
}
.flex-box {
  overflow: hidden;
  display: flex;
  height: 100px;
  width: 100%;
  min-width: 600px;
  flex-direction: row;
  div {
    overflow: auto;
  }
  .flex-left {
    background: red;
    width: 200px;
  }
  .flex-main {
    background: pink;
    flex: 1; //
  }
  .flex-right {
    background: purple;
    width: 300px;
  }
}
.position-box {
  min-width: 600px;
  position: relative;
  overflow: hidden;
  height: 100px;
  div {
    overflow: auto;
  }
  .position-left {
    width: 20%;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background: red;
  }
  .position-main {
    position: absolute;
    left: 200px;
    right: 300px;
    height: 100%;
    background: pink;
  }
  .position-right {
    position: absolute;
    width: 300px;
    height: 100%;
    background: purple;
    right: 0;
  }
}
.table-box {
  width: 100%;
  height: 100px;
  overflow: hidden;
  min-width: 600px;
  display: table;
  .table-left {
    width: 200px;
    height: 100%;
    background: red;
    display: table-cell;
    overflow: auto;
  }
  .table-main {
    background: pink;
    display: table-cell;
  }
  .table-right {
    width: 300px;
    background: purple;
    display: table-cell;
  }
}
.grid-box {
  min-width: 600px;
  overflow: hidden;
  display: grid;
  width: 100%;
  height: 100px;
  div {
    overflow: auto;
  }
  grid-template-rows: 100px;
  grid-template-columns: 200px auto 300px;
  .grid-left {
    background: red;
  }
  .grid-main {
    background: pink;
  }
  .grid-right {
    background: purple;
  }
}
</style>
