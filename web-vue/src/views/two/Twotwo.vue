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
      <div class="title">font Awesome图标的引入方法：</div>
      <p>
        <span class="number">1. </span>在vue项目中<span class="font-bold"
          >npm i font-awesome -S</span
        >后, 在main.js中引入<span class="font-bold"
          >import 'font-awesome/css/font-awesome.min.css'</span
        >或者在需要使用此图标时在组件中引入文件
      </p>
      <p>
        <span class="number"> 2.</span>
        <a href="http://www.fontawesome.com.cn/" target="_blank"
          ><span class="font-bold">网址（首页）</span></a
        >，找到心仪的图标
      </p>
      <p>
        <span class="number"> 3. </span>
        使用方法可参考网址：<a
          href="http://www.fontawesome.com.cn/examples/"
          target="_blank"
          ><span class="font-bold"
            >http://www.fontawesome.com.cn/examples/</span
          ></a
        >
      </p>
      <div>
        例如：
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </div>
    </el-row>
  </div>
</template>
<script>
import 'font-awesome/css/font-awesome.min.css'
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
