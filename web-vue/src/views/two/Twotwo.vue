<template>
  <div class="ht100">
    <h1>引入阿里图标</h1>
    <div>
      elementUI 图标
      <i class="el-icon-edit"></i>
    </div>
    <div>
      阿里图标
      <i class="iconfont icon-caidan"></i>
    </div>
    <el-row>
      <div class="title">阿里图标的引入方法：</div>
      <p>
        <span class="number"> 1.</span>
        <a
          href="https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2"
          target="_blank"
          ><span class="font-bold">阿里图标网址（首页）</span></a
        >，找到心仪的图标，加入购物车，加入项目，下载到本地，解压
      </p>
      <p>
        <span class="number">2. </span>在vue项目目录src中新建目录<span
          class="font-bold"
          >aliiconfronts</span
        >,用于存放解压后的所有代码文件
      </p>
      <p>
        <span class="number"> 3. </span>在main.js中导入<span class="font-bold"
          >iconfont.css</span
        >文件，如<span class="font-bold"
          ><i>import '@/aliiconfronts/iconfont.css'</i></span
        >
      </p>
      <p>
        <span class="number"> 4. </span>任意组件中使用阿里图标，如"{{
          aliicon
        }}"
      </p>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Twotwo',
  data() {
    return {
      data: [],
      aliicon: '<i class="iconfont  icon-caidanzu"></i>'
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
}
p {
  text-indent: 2em;
  margin: 10px 0px;
}
p a {
  text-decoration-color: inherit;
  color: black;
  border-bottom: 1px solid #ccc;
}
p a:hover {
  color: rgb(28, 148, 179);
}
p .font-bold {
  font-weight: 600;
}
.number {
  margin-right: 3px;
}
</style>
