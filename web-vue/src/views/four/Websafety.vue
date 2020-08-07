<template>
  <div class="ht100 wt100">
    <div class="ht100 wt100 overflow-y-auto">
      <h1>
        <a
          href="https://www.cnblogs.com/zhoulifeng/p/12073085.html"
          target="_blank"
          >web安全问题</a
        >
      </h1>
      <h2>常见的web攻击方式</h2>
      <h3>1、XSS</h3>
      <div class="web-safe">
        <p>
          XSS（cross site
          scripting）跨站脚本攻击，因为缩写和CSS重叠，所以能叫XSS，跨站脚本攻击是指存在安全漏洞的web网站注册用户的浏览器内非法的非站点HTML标签或JavaScript进行一种攻击
        </p>
        <p>跨站脚本攻击有可能造成以下影响：</p>
        <p>1.利用虚假输入表单骗取用户个人信息</p>
        <p>
          2.利用脚本窃取用户的cookie值，被害者在不知情的时候，帮助攻击者发送恶意请求
        </p>
        <p>3.显示伪造的文章或图片</p>
        <div class="red-color">
          XSS攻击分类：
        </div>
        <p>反射型---URL参数直接注入</p>
        <p>
          获取cookie：通过访问你的网址，在URL参数攻击，获取到cookie域名伪造网址；用盗取的网址，修改一个简易的网址，发送攻击，也能访问，信息也能保存，又称伪装型网站，伪造cookie入侵
        </p>
        <p>
          存储型
          存储到DB后读取注入：跨脚本注入，通过脚本注入代码。比如，用户发送评论，用户的信息都会在黑客网站显示，就可以拿到你所需要的数据
        </p>
        <div class="red-color">XSS攻击的危害：</div>
        <p>1、获取页面数据</p>
        <p>2、获取cookies</p>
        <p>3、劫持前端逻辑</p>
        <p>4、发送请求</p>
        <p>5、偷取网站的任意数据</p>
        <p>6、偷取用户的资料</p>
        <p>7、偷取用户的秘钥和登录状态</p>
        <p>8、欺骗用户</p>
        <div class="red-color">防范手段</div>
        <h4>HEAD ctx.set('X-XSS-Protection',0) // 禁止XSS过滤</h4>
        <p>
          0：禁止XSS过滤；1：启用XSS过滤（通常浏览器是默认的），如果检测到跨脚本攻击，浏览器将清除页面（删除不安全的部分）
          mode=block启用XSS过滤，如果检测到攻击，浏览器将不再会清除页面，而是会组织页面加载
        </p>
        <h4>
          CSP（内容安全策略），本质是白名单，开发者明确的告诉浏览器哪些外部资源可以加载和执行，在http请求中可以设置conten-Security-Policy
        </h4>
        <h4>黑名单</h4>
        <p>
          用户输入永远不可信任，最普遍的做法就是转义输入的内容，对于引号，尖括号，斜杠进行转义；
        </p>
        <h4>httpOnly cookie</h4>
        <p>
          设置方法：response.addHeader('Set-Cookie','uid=12;path=/;
          HttpOnly')；这是防止XSS攻击窃取用户cookie最有效的防御手段，web应用程序设置cookie事，将其属性设置为HTTPOnly就可以防止网页的cookie客户端恶意JavaScript窃取，保护用户cookie信息
        </p>
      </div>
      <h3>2、CSRF</h3>
      <h3>3、点击劫持</h3>
      <h3>4、SQL注入</h3>
      <h3>5、OS命令注入</h3>
      <h3>6、请求劫持</h3>
      <h3>7、DDOS</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Websafety',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.web-safe {
  .red-color {
    color: red;
  }
  p {
    text-indent: 2rem;
    line-height: 30px;
  }
}
</style>
